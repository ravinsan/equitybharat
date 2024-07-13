import mongoose, { Schema } from "mongoose";

const menuSchema = new Schema({
    name:{type:String, required:true},
    slug:{type:String, required:true},
    url :{type:String},
    parent_id: { type: mongoose.Schema.Types.ObjectId, ref: "Menu" },
    order_id :{type:Number},
    icon_code:{type:String},
    create_by:{type:mongoose.Schema.Types.ObjectId, ref: "User"},
    updated_by:{type:mongoose.Schema.Types.ObjectId, ref: "User"},
}, {timestamps:true});

const Menu = mongoose.model("Menu", menuSchema);
export default Menu;