//const validateObjectId = require("../middleware/validateObjectId");
//const auth = require("../middleware/auth");
//const admin = require("../middleware/admin");
const { Patient, validate } = require("../models/patient");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const patients = await Patient.find()
    .select("-__v")
  //.sort("name");
  res.send(patients);
});

//router.post("/", auth, async (req, res) => {
router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let patient = new Patient({
    patientId: req.body.patientId,
    phone: req.body.phone,
    dob: req.body.dob,
    gender: req.body.gender
  });
  patient = await patient.save();

  res.send(patient);
});

//router.put("/:id", [auth, validateObjectId], async (req, res) => {
router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const patient = await Patient.findByIdAndUpdate(
    req.params.id, req.body,
    { new: true }
  );

  if (!patient)
    return res.status(404).send("The patient with the given ID was not found.");

  res.send(patient);
});

//router.delete("/:id", [auth, admin, validateObjectId], async (req, res) => {
router.delete("/:id", async (req, res) => {
  const patient = await Patient.findByIdAndRemove(req.params.id);

  if (!patient)
    return res.status(404).send("The patient with the given ID was not found.");

  res.send(patient);
});

//router.get("/:id", validateObjectId, async (req, res) => {
router.get("/:id", async (req, res) => {
  const patient = await Patient.findById(req.params.id).select("-__v");

  if (!patient)
    return res.status(404).send("The genre with the given ID was not found.");

  res.send(patient);
});

module.exports = router;
