import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name : {
        type:String,
        require:true         
    },
    email : {
        type: String,
        require : true,
        unique : true
    },
    password : {
        type:String,
        require:true
    },
    mobile : {
        type:Number,
        require:true
    },
    status : {
        type:Boolean,
        default:1
    }
}, {timestamp:true});

const User = mongoose.model("User", userSchema);
export default User;