const mongoose=require('mongoose');
const user=new mongoose.Schema(
    {

    name : {
        type:String 
    },

    age :{
        type:Number
    },
    weight:{
        type:Number
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
const Model=mongoose.model("Employee",user,"Employee");
module.exports=Model