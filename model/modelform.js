const mongoose=require('mongoose')
const signUpTemplate=new mongoose.Schema({
    fullName:{
        type:String,
    },
    username:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    date:{
        type:Date,
        default:Date.now
    }

})

module.exports=mongoose.model("Node-1",signUpTemplate)