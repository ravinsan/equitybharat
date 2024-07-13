import Menu from "../models/Menu.js";

export const storeMenu = async (req, res) => {
    const {name, slug, url, parent_id, icon_code, order_id} = req.body;
    try {
         
      const data = {
                 name:name,
                 slug:slug,
                 url:url,
                 order_id:order_id,
                 parent_id:parent_id,
                 icon_code:icon_code,
                 create_by:req.user.id
           }

           const menu = await Menu.create(data);
          //  console.log(menu);
           if(!menu)
           {
             return res.status(400).json({message:"Data failed"});
           }

           return res.status(200).json({message:"Menu created successfully.", data:menu});

    } catch (error) {
        return res
      .status(500)
      .json({ error: error.message });
    }
}

export const indexMenu = async (req, res) => {
  
  try {
        const count = await Menu.countDocuments();
        const menus = await Menu.find()
                            .populate('parent_id', 'name slug')
                            .populate('create_by', 'name');
        if(count <= 0)
        {
          return res.status(400).json({message:"Data has not been found!"});
        }

          return res.status(200).json({message:"Menus data is successfully get", data:menus});
  } catch (error) {
          return res.status(400).json({error:error.message});
  }
  
}
export const viewMenu = async (req, res) => {
       const id = req.params.id;
       try {
            const menu = await Menu.findById(id)
                        .populate('parent_id', 'name')
                        .populate('create_by', 'name');;
            return res.status(200).json({message:"Menu is successfully get.", data:menu});
       } catch (error) {
           return res.status(400).json({error:error.message});
       } 
}
export const updateMenu = async (req, res) => {
     const {name, slug, url, parent_id, icon_code, order_id} = req.body; 

     try {
           const id   = req.params.id;
           const data = {name, slug, url, parent_id, icon_code, order_id};
           const menu = await Menu.findByIdAndUpdate(id, data, {new:true});
           
           return res.status(200).json({message:"Menu is successfully updated", data:menu});
     } catch (error) {
           return res.status(400).json({error:error.message});
     }
}
export const destroyMenu = async (req, res) => {
  const id = req.params.id;
  try {
        
        const menu = await Menu.findByIdAndDelete(id);
        if(!menu)
        {
          return res.status(400).json({message:"Menu id is not exist."});
        }

        return res.status(200).json({message:"Menu is successfully deleted"});
  } catch (error) {
        return res.stastus(400).json({error:error.message});
  }
}