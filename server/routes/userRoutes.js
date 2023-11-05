const express = require("express");
const { registerController } = require("../controllers/userController");

// router
const router = express.Router();

// routes
router.post("/register", registerController);
// export
module.exports = router;
