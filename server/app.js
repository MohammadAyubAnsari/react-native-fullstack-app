const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectMongoDB = require("./config/db");

// DOTENV
dotenv.config();

// MongoDB Connection
connectMongoDB();

// REST object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.get("", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the Full Stack app",
  });
});

// PORT
const PORT = process.env.PORT || 8080;

// listen
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`.bgGreen.white);
});
