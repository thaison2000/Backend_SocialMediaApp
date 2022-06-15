const router = require("express").Router();
const Comment = require('../models/Comment')
const Post = require('../models/Post')
const User = require('../models/User')

//create a comment
router.post("/", async (req, res) => {
  const newComment = new Comment(req.body);
  try {
    const savedComment = await newComment.save();
    res.status(200).json(savedComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete a comment
router.delete("/:id", async (req, res) => {
    try {
      const comment = await Comment.findById(req.params.id);
      console.log(comment.userId)
      console.log(req.body.userId)
      if (comment.userId == req.body.userId) {
        await comment.deleteOne();
        res.status(200).json("the comment has been deleted");
      } else {
        res.status(403).json("you can delete only your comment");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });