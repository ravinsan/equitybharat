import mongoose from "mongoose";
import { DB_NAME, MONGODB_URI } from "../envhandler.js";

const connectDB = async () => {
  try {
    const connetionInstance = await mongoose.connect(
      `${MONGODB_URI}/${DB_NAME}`
    );
    console.log(`MongoDB Connected: ${connetionInstance.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection failed", error);
    // eslint-disable-next-line no-undef
    process.exit(1);
  }
};

export default connectDB;
