const { History, validate } = require("../models/history");
//const auth = require("../middleware/auth");
//const admin = require("../middleware/admin");
const validateObjectId = require("../middleware/validateObjectId");
const moment = require("moment");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const histories = await History.find()
    .select("-__v")
  //  .sort("name");
  res.send(histories);
});

//router.post("/", [auth], async (req, res) => {
router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const historyItem = new History({
    exists: req.body.exists,
    sessionId: req.body.sessionId,
    started: req.body.started,
    ended: req.body.ended,
    provider: req.body.provider,
    expert: req.body.expert,
    group: req.body.group
  });
  await historyItem.save();

  res.send(historyItem);
});

router.put("/:id", async (req, res) => {
  //router.put("/:id", [auth], async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const historyItem = await History.findByIdAndUpdate(
    req.params.id,
    {
      exists: req.body.exists,
      sessionId: req.body.sessionId,
      started: req.body.started,
      ended: req.body.ended,
      provider: req.body.provider,
      expert: req.body.expert,
      group: req.body.group
    },
    { new: true }
  );

  if (!historyItem)
    return res.status(404).send("The history item with the given ID was not found.");

  res.send(historyItem);
});

//router.delete("/:id", [auth, admin], async (req, res) => {
router.delete("/:id", async (req, res) => {
  const historyItem = await History.findByIdAndRemove(req.params.id);

  if (!historyItem)
    return res.status(404).send("The history item with the given ID was not found.");

  res.send(historyItem);
});

router.get("/:id", validateObjectId, async (req, res) => {
  const historyItem = await History.findById(req.params.id).select("-__v");

  if (!historyItem)
    return res.status(404).send("The historyItem with the given ID was not found.");

  res.send(historyItem);
});

module.exports = router;
