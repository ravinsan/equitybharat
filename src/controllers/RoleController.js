import mongoose from "mongoose";
import Role from "../models/Role.js";

export const Index = async (req, res) => {
  const roles = await Role.find();
  res.status(200).json({ message: "Role is successfully get!", data: roles });
};

export const Store = async (req, res) => {
  const { name, guard } = req.body;

  try {
    const data = { name, guard };
    const role = await Role.create(data);

    if (role) {
      res.status(200).json({ message: "Role successfully created!" });
    } else {
      res.status(401).json({ message: "Something is missiong!" });
    }
  } catch (error) {
    console.log(error);
  }
};

export const View = async (req, res) => {
  const id = req.params.id;

  // Validate the ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID format." });
  }

  try {
    const role = await Role.findById(id);
    if (!role) {
      return res.status(404).json({ message: "Role not found." });
    }
    return res
      .status(200)
      .json({ message: "Role successfully retrieved.", role: role });
  } catch (error) {
    console.error("Error retrieving role:", error);
    return res
      .status(500)
      .json({ message: "An error occurred while retrieving the role." });
  }
};

export const update = async (req, res) => {
  const id = req.params.id;
  const { name, guard } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID format." });
  }

  try {
    const data = {
      name: name,
      guard: guard,
    };
    const role = await Role.findByIdAndUpdate(id, data, { new: true });
    if (!role) {
      return res.status(404).json({ message: "Data failed." });
    }

    return res
      .status(200)
      .json({ message: "Role is successfully updated.", role: role });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Something went wrong!", error: error.message });
  }
};

export const destroy = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID format." });
  }

  try {
    const role = await Role.findByIdAndDelete(id);
    if (!role) {
      return res.status(404).json({ message: "Data failed." });
    }

    return res.status(200).json({ message: "Role is successfully deleted." });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Something went wrong!", error: error.message });
  }
};
