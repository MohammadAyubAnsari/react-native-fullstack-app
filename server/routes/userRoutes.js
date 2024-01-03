const express = require("express");
const {
  registerController,
  loginController,
  updateController,
  requireSignIn,
} = require("../controllers/userController");

// router
const router = express.Router();

// routes

// Register || POST
router.post("/register", registerController);

// Login || POST
router.post("/login", loginController);

// Update || PUT
router.put("/update-user", requireSignIn, updateController);

// export
module.exports = router;
