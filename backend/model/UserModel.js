const {model ,Schema } = require("mongoose");


const userSchema = new Schema({
    firstName :{type:String , required:true},
    lastName :{type:String , required:true},
    gender:{type:String , default:null},
    email:{type:String , required:true},
    password:{type:String , required:true},
    image:{type:String , default:"avatar.png"},
    birthDate:{type:Date, default:null},
    role:{type:String , default:"user"},
    createdAt:{type:Date , default:()=>new Date().getTime()},
    updatedAt:{type:Date , default:null},
    activate:{type:Boolean , default:false}
});


const UserModel = model("users" , userSchema);
module.exports = UserModel;