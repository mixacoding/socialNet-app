const UserModel = require("../../model/UserModel");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
    try{
        let {email , password} = req.body;
        const foundUser = await UserModel.findOne({email});
        if(foundUser){
            let checkPassword = await bcrypt.compare(password , foundUser.password);
            if(checkPassword){
                res.send("User is logged in");
            }else{
                res.status(201).send("Password is wrong");
            }
        }else{
            res.status(201).send("User with this email does not exist");
        }
    }catch(error){
        res.status(415).send({msg:error.message});
    }
}    
module.exports = login;