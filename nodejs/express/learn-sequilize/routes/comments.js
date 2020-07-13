var express = require("express");
var { User, Comment } = require("../models");
const comment = require("../models/comment");

var router = express.Router();
router.get("/:id", async (req, res, next) => {
  const comments = await Comment.findAll({
    include: {
      model: User,
      where: { id: req.params.id },
    },
  });
  try {
    console.log(comments);
    res.json(comments);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  console.log("Hello");
  console.log(req.body);
  const result = await Comment.create({
    commenter: req.body.id,
    comment: req.body.comment,
  });
  try {
    console.log(result);
    res.status(201).json(result);
  } catch (error) {
    console.error(err);
    next(err);
  }
});

router.patch("/:id", async (req, res, next) => {
  const result = await Comment.update(
    { comment: req.body.comment },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  try {
    res.json(rsult);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.delete(":/id", async (req, res, next) => {
  const result = await Comment.delete({ where: { id: req.params.id } });
  try {
    res.json(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
