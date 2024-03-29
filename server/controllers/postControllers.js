const postModel = require("../models/postModel");

const createPostController = async (req, res) => {
  try {
    const { title, description } = req.body;
    // validate
    if (!title || !description) {
      return res.status(500).send({
        success: false,
        message: "Please provide all fields",
      });
    }
    const post = await postModel({
      title,
      description,
      postedBy: req.auth._id,
    }).save();
    res.status(201).send({
      success: true,
      message: "Post Created Successfully",
      post,
    });
    console.log(req);
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      success: true,
      message: "Error in Create Post API",
      err,
    });
  }
};

// GET ALL POSTS
const getAllPostsController = async (req, res) => {
  try {
    const posts = await postModel
      .find()
      .populate("postedBy", "_id name")
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      message: "All Post Data",
      posts,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      message: "Error in GET ALL POSTS API",
      err,
    });
  }
};

// GET USER POSTS
const getUserPostsController = async (req, res) => {
  try {
    const userPosts = await postModel.find({ postedBy: req.auth._id });
    // const userPosts = await postModel.find().populate("postedBy", "_id name");
    res.status(200).send({
      success: true,
      message: "user posts",
      userPosts,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      success: false,
      message: "Error in User Post API",
      err,
    });
  }
};

// Delete Post
const deletePostController = async (req, res) => {
  try {
    const { id } = req.params;
    await postModel.findByIdAndDelete({ _id: id });
    res.status(200).send({
      success: true,
      message: "Post deleted successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      message: "Error in delete post API",
      err,
    });
  }
};

// Update Post
const updatePostController = async (req, res) => {
  try {
    const { title, description } = req.body;
    // post find
    const post = await postModel.findById({ _id: req.params.id });
    // validatiion
    if (!title || !description) {
      return res.status(500).send({
        success: false,
        message: "Please provide post title or description",
      });
    }
    const updatedPost = await postModel.findByIdAndUpdate(
      { _id: req.params.id },
      {
        title: title || post?.title,
        description: description || post?.description,
      },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Post updated successfully",
      updatedPost,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      message: "Error in update post api",
      err,
    });
  }
};

module.exports = {
  createPostController,
  getAllPostsController,
  getUserPostsController,
  deletePostController,
  updatePostController,
};
