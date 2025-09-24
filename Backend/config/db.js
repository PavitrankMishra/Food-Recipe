import mongoose from "mongoose";

// Function mongodb for database connection

export const connectDB = async () => {
  try {
   const conn = await mongoose.connect(process.env.MONGO_URL);
   console.log("Connect to database", conn.connection.host);
  } catch (err) {
    console.log("DB Error", err);
  }
};
