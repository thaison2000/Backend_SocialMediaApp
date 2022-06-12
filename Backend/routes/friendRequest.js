const router = require("express").Router();
const FriendRequest = require('../models/FriendRequest');
const User = require("../models/User");

//create a request
router.post("/", async (req, res) => {
  const newRequest = new FriendRequest(req.body);
  try {
    const savedRequest = await newRequest.save();
    res.status(200).json(savedRequest);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete a request
router.delete("/", async (req, res) => {
    try {
      const deletedRequest = await FriendRequest.findOne({sendUserId: req.body.sendUserId,receiveUserId: req.body.receiveUserId});
      await deletedRequest.deleteOne();
      res.status(200).json('delete friend request successfully');
    } catch (err) {
        console.log(err)
      res.status(500).json(err);
    }
  });


