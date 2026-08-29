import mongoose, { mongo } from "mongoose";

const urlSchema=new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true
    },
    redirectUrl:{
        type:String,
        unique:true 
    },
    visitHistory:[{
        timeStamp:{
            type:Number
        }
    }],


},
{timestamps:true}
)

const URL=mongoose.model('url',urlSchema)
export default URL