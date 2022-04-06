const mongoose= require("mongoose");

const userList = mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        age:{
            type:Number,
        },
        prograd_id:{
            type:Number,
        },
        squad:{
            type:Number,
        }
    }
)

module.exports = mongoose.model("user",userList)