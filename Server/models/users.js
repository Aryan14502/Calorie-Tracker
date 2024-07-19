const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema(
    {

    name : {
        type:String 
    },
    email :{
        type:String
    },

    password :{
        type:String
    },

    confirmPassword :{
        type:String

    }

    
}
)
                            //collection_name  //IF required in Capital
const Users=mongoose.model("Users",UserSchema,"Users");
module.exports=Users