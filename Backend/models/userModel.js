import mongoose from "mongoose";

// Schema

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "User name is not required"],
  },
  email: {
    type: String,
    required: [true, "EmailId is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  phone: {
    type: String,
    required: [true, "Phone no is required"],
  },
});

const userModel = mongoose.model("User", userSchema);

export default userModel;