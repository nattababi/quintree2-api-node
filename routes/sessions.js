const { Session, validate } = require("../models/session");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const validateObjectId = require("../middleware/validateObjectId");
const moment = require("moment");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", [auth], async (req, res) => {

  const urlParams = req.query;

  let sort = {};

  if (urlParams.path && urlParams.order) {
    sort[urlParams.path] = urlParams.order === 'asc' ? 1 : -1;
  }
  else {
    sort = { "sessionId": -1 };
  }

  let expert = {};
  let provider = {};
  let group = {};
  if (urlParams.search) {
    //expert["expert"] = { "$regex": urlParams.search, "$options": "i" };
    //provider["provider"] = { "$regex": urlParams.search, "$options": "i" };
    group["group"] = { "$regex": urlParams.search, "$options": "i" };
  }

  let expertQuery = { expert: req.user._id };
  let providerQuery = { provider: req.user._id };
  let query = { $or: [providerQuery, expertQuery] };

  if (req.user.isAdmin) {
    query = {};
  }
  // calculate total count
  let total = await Session
    //.find({ $or: [provider, expert, group] })
    .find(query).countDocuments();

  const limit = (urlParams.pageSize) ? Number(urlParams.pageSize) : 6;
  const skip = (urlParams.page) ? (Number(urlParams.page) - 1) * limit : 0;

  let sessions = await Session
    .find(query)
    .populate('patient')
    .populate('provider')
    .populate('expert')
    .select("-__v")
    .sort(sort)
    .skip(skip)
    .limit(limit)

  console.log("RESULT", sessions.length, ",total", total);
  res.send({ sessions, total });
});

router.post("/", [auth], async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const sessionItem = new Session({
    exists: req.body.exists,
    sessionId: req.body.sessionId,
    started: req.body.started,
    ended: req.body.ended,
    provider: req.body.provider,
    expert: req.body.expert,
    group: req.body.group
  });
  await sessionItem.save();

  res.send(sessionItem);
});

router.put("/:id", [auth], async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const sessionItem = await Session.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  console.log('PUT:', sessionItem);

  if (!sessionItem)
    return res.status(404).send("The session with the given ID was not found.");

  res.send(sessionItem);
});

router.delete("/:id", [auth, admin], async (req, res) => {
  const sessionItem = await Session.findByIdAndRemove(req.params.id);

  if (!sessionItem)
    return res.status(404).send("The session with the given ID was not found.");

  res.send(sessionItem);
});

router.get("/:id", validateObjectId, async (req, res) => {
  const sessionItem = await Session.findById(req.params.id).select("-__v").populate('patient');

  if (!sessionItem)
    return res.status(404).send("The session with the given ID was not found.");

  res.send(sessionItem);
});

module.exports = router;