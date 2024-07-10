import app from "./app.js"
import { PORT } from "./envhandler.js";
import connectDB from "./connectDB/connectDB.js"

app.get('/', (req, res)=>{   //app is comming from app.js
    res.send("Hello India!");
})

const startServer = async () => {
    try {
      await connectDB();
      app.listen(PORT || 5000, () => {
        console.log(` ⚙️  Server is running http://localhost:${PORT}`);
      });
    } catch (err) {
      console.log("MONGO db connection failed !!! ", err);
    }
  };
  
  startServer();