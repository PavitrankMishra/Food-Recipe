import userModel from "../models/userModel.js";

export const registerController = async (req, res) => {
  try {
    const { userName, email, password, phone } = req.body;
    // Validation
    if (!userName || !email || !password || !phone) {
      return res.status(500).send({
        success: false,
        message: "Please provide all the fields",
      });
    }

    // Check Error
    const existing = await userModel.findOne({ email });
    if (existing) {
      return res.status(500).send({
        success: false,
        message: "Email Already registered Please login",
      });
    }

    // Create New User
    const user = await userModel.create({ userName, email, password, phone });
    res.status(201).send({
      success: true,
      message: "User Created successfully",
      user
    });
  } catch (err) {
    console.log("The error is: ", err);
    res.status(500).send({
      success: false,
      message: "Error in Register API",
      err,
    });
  }
};
