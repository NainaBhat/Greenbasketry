import mongoose from "mongoose";
import dotenv from "dotenv";
import dns from "dns";
   dns.setServers(["8.8.8.8", "1.1.1.1"]);
dotenv.config();

export const connectDB = async () => {
  try {
    
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};
