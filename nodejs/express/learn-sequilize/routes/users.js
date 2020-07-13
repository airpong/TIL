var express = require("express");
const { User } = require("../models");
var router = express.Router();

/* GET users listing. */
router.get("/", async (req, res, next) => {
  const users = await User.findAll();
  try {
    res.json(users);
  } catch (error) {
    console.log(error);
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  const result = await User.create({
    name: req.body.name,
    age: req.body.age,
    married: req.body.married,
  });
  try {
    console.log(result);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    next(err);
  }
});

module.exports = router;
