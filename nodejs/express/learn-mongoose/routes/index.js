var express = require("express");
var User = require("../schemas/user");
var router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
  console.log("Im here....");
  try {
    const users = await User.find();
    console.log(users);
    res.render("mongoose", { users });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
