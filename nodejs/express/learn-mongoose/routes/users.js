var express = require("express");
var User = require("../schemas/user");
const { Error } = require("mongoose");
var router = express.Router();

/* GET users listing. */
router.get("/", async (req, res, next) => {
  const users = await User.find();
  try {
    res.json(users);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const user = new User({
    name: req.body.name,
    age: req.body.age,
    married: req.body.married,
  });
  const result = await user.save();
  try {
    console.log(result);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    next(Error);
  }
});

module.exports = router;
