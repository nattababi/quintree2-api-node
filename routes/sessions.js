const { Session, validate } = require("../models/session");
//const auth = require("../middleware/auth");
//const admin = require("../middleware/admin");
const validateObjectId = require("../middleware/validateObjectId");
const moment = require("moment");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {

  const urlParams = req.query;

  let sort = {};

  if (req.query.path && req.query.order) {
    sort[req.query.path] = req.query.order === 'asc' ? 1 : -1;
  }
  else {
    sort = { "sessionId": -1 };
  }

  let expert = {};
  let provider = {};
  let group = {};
  if (req.query.search) {
    expert["expert"] = { "$regex": req.query.search, "$options": "i" };
    provider["provider"] = { "$regex": req.query.search, "$options": "i" };
    group["group"] = { "$regex": req.query.search, "$options": "i" };
  }

  let sessions = await Session
  .find({ $or: [provider, expert, group] })
  .select("-__v")
  .sort(sort);
  
  const total = sessions.length;
  
  const limit = (req.query.pageSize) ? Number(req.query.pageSize) : 12;
  const skip = (req.query.page) ? (Number(req.query.page) - 1)*limit : 0;
  
  sessions =  await Session
    .find({ $or: [provider, expert, group] })
    .populate('patient')
    .populate('provider')
    .populate('expert')
    .select("-__v")
    .sort(sort)
    .skip(skip)
    .limit(limit);
  
  console.log("RESULT", sessions.length);
  res.send({sessions, total});
});

//router.post("/", [auth], async (req, res) => {
router.post("/", async (req, res) => {
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

router.put("/:id", async (req, res) => {
  //router.put("/:id", [auth], async (req, res) => {
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

//router.delete("/:id", [auth, admin], async (req, res) => {
router.delete("/:id", async (req, res) => {
  const sessionItem = await Session.findByIdAndRemove(req.params.id);

  if (!sessionItem)
    return res.status(404).send("The session with the given ID was not found.");

  res.send(sessionItem);
});

router.get("/:id", validateObjectId, async (req, res) => {
  const sessionItem = await Session.findById(req.params.id).select("-__v").populate('patient');

  if (!sessionItem)
    return res.status(404).send("The session item with the given ID was not found.");

  res.send(sessionItem);
});

module.exports = router;
