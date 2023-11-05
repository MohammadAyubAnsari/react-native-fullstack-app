const userModel = require("../models/userModel");

const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // validation
    if (!name) {
      return res.status(400).send({
        success: false,
        message: "Name is required",
      });
    }
    if (!email) {
      return res.status(400).send({
        success: false,
        message: "Email is required",
      });
    }
    if (!password || password.length < 6) {
      return res.status(400).send({
        success: false,
        message: "Password is required and must be 6 character long",
      });
    }
    // existing user
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      return res.status(500).send({
        success: false,
        message: "User exists",
      });
    }
    // save user
    const user = await userModel({ name, email, password }).save();
    return res.status(201).send({
      success: true,
      message: "User created successfully",
    });
  } catch (err) {
    console.log(err);
    return (
      res,
      status(500).send({
        success: false,
        message: "Error in Register API",
        err,
      })
    );
  }
};

module.exports = { registerController };
