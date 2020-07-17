const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const { Post, Hashtag, User } = require("../models");
const { isLoggedIn } = require("./middlewares");

const router = express.Router();
fs.readdir("uploads", (error) => {
  if (error) {
    console.error("Because uploads folder does not exist, make folder");
    fs.mkdirSync("uploads");
  }
});
