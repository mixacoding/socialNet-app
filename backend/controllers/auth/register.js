const UserModel = require("../../model/UserModel");
const bcrypt = require("bcryptjs");
const {SALT} = require("../../config/config");
const register = async (req, res) => {
    const {email, password,confirmPassword} = req.body;
    try{
        const chackUser = await UserModel.findOne({email})
        if(chackUser){
            res.status(201).send({msg:"User aleady exist!"});
        }else{
            if(password === confirmPassword){
                const hashedPassword = await bcrypt.hash(password, SALT);
                const newUser = new UserModel({...req.body, password:hashedPassword});
                const saveUser = await newUser.save();
                res.send(saveUser);
            }else{
                res.status(201).send({msg:"Password and confirm password not match!"});
            }
        }
    }catch(error){
        res.status(415).send({msg:error.message});
    }
};

module.exports = register;