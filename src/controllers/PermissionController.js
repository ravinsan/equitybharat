import Permission from "../models/Permission.js";

export const storePermission = async (req, res) => {
  const { menu_id, sub_menu_id, name, url, status } = req.body;

  try {
    const data = {
            menu_id     : menu_id,
            sub_menu_id : sub_menu_id,
            name        : name,
            url         : url,
            status      : status,
            create_by   : req.user.id,
    };
   
    const permission = await Permission.create(data);
    //  console.log(permission);
    if (!permission) {
      return res.status(400).json({ message: "Data failed" });
    }

    return res.status(200).json({ message: "Permission created successfully.", data: permission });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const indexPermission = async (req, res) => {
  try {
    const count = await Permission.countDocuments();
    const Permissions = await Permission.find()
      .populate("menu_id", "name")
      .populate("sub_menu_id", "name")
      .populate("create_by", "name");
    if (count <= 0) {
      return res.status(400).json({ message: "Data has not been found!" });
    }

    return res.status(200).json({ message: "Permissions data is successfully get", data: Permissions });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const viewPermission = async (req, res) => {
  const id = req.params.id;
  try {
    const permission = await Permission.findById(id)
                            .populate("menu_id", "name")
                            .populate("sub_menu_id", "name")
                            .populate("create_by", "name");

    return res.status(200).json({ message: "Permission is successfully get.", data: permission });

  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const updatePermission = async (req, res) => {
  const { menu_id, sub_menu_id, name, url, status } = req.body;

  try {
    const data = {
                    menu_id: menu_id,
                    sub_menu_id: sub_menu_id,
                    name: name,
                    url: url,
                    status: status,
                    create_by: req.user.id,
                };
                const id = req.params.id;
                const permission = await Permission.findByIdAndUpdate(id, data, {
                new: true,
                });

    return res.status(200).json({ message: "Permission is successfully updated", data: permission });

  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const destroyPermission = async (req, res) => {
  const id = req.params.id;
  try {
    const permission = await Permission.findByIdAndDelete(id);
    if (!permission) {
      return res.status(400).json({ message: "Permission id does not exist." });
    }

    return res.status(200).json({ message: "Permission is successfully deleted" });
  } catch (error) {
    return res.stastus(400).json({ error: error.message });
  }
};
