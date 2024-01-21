const express = require("express");
const { requireSignIn } = require("../controllers/userController");
const {
  createPostController,
  getAllPostsController,
} = require("../controllers/postControllers");

// router object
const router = express.Router();

// Create Post
router.post("/create-post", requireSignIn, createPostController);

// Get All Posts
router.get("/get-all-post", getAllPostsController);

// export
module.exports = router;
