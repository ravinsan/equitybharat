import mongoose from "mongoose";

const permissionSchema = new mongoose.Schema(
  {
    menu_id: { type:mongoose.Schema.Types.ObjectId, ref: "Menu", require: true },
    sub_menu_id: { type:mongoose.Schema.Types.ObjectId, ref: "Menu", require: true },
    name: { type: String, require: true },
    url: { type: String, require: true },
    status: { type: Boolean, default: true },
    create_by:{type:mongoose.Schema.Types.ObjectId, ref: "User"},
  },
  { timestamps: true }
);

const Permission = mongoose.model("Permission", permissionSchema);
export default Permission;
