const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/config");
const UserModel = require("../model/UserModel");

const verifyToken = async(req, res, next) => {
    if(req.headers.hasOwnProperty("authorization")){
     let token = req.headers.authorization;
     jwt.verify(token,JWT_SECRET,async(error, decode) => {
        console.log(error);
        if(error){
            res.status(401).send({msg:"Toke is expired!"})
        }else{
                let chackUser = await UserModel.findOne({_id:decode._id});
                if(chackUser){
                    req.locals = {
                        _id:decode._id,
                        role:decode.role
                    }
                    next();
                }else {
                    res.status(401).send({msg:"Invalid Token!"})
                }
        }  
     });
    }else{
        res.status(401).send({msg:"Unauthorized"})
    }
}

module.exports = verifyToken;