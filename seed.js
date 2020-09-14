const { History } = require("./models/history");
const mongoose = require("mongoose");
const config = require("config");

const data = [
  { exists: true, sessionId: 2547, started: "Aug 7, 2020 12:55 PM", ended: "Aug 7, 2020 1:10 PM", provider: "Patient Encounter", expert: "Sihun Alex Kim", group: "Affiliated ENT - Dr. Kim" },
  { exists: true, sessionId: 2546, started: "Jul 26, 2020 11:05 PM", ended: "Jul 26, 2020 11:07 PM", provider: "Patient Encounter", expert: "Alexey Babichev", group: "Quintree Testing" },
  { exists: true, sessionId: 2545, started: "Jul 26, 2020 11:10 PM", ended: "Jul 26, 2020 11:15 PM", provider: "Patient Encounter", expert: "Alexey Babichev", group: "Quintree Testing" },
  ];

async function seed() {
  await mongoose.connect(config.get("db"));

  await History.deleteMany({});

  await History.insertMany(data);

  mongoose.disconnect();

  console.info("Done2!");
}

seed();
