const { Session } = require("./models/session");
const { Patient } = require("./models/patient");
const { User } = require("./models/user");
const mongoose = require("mongoose");
const config = require("config");
const bcrypt = require('bcrypt');

var alex, joe;


async function seed() {
  await mongoose.connect(config.get("db"), { useNewUrlParser: true, useUnifiedTopology: true });

  
  await Patient.deleteMany({});
  //await Patient.insertMany(dataPatients);
  alex = new Patient({patientId: "PT000612", phone: "(248) 543-6571", dob: "03/15/1970", gender: "male"});
  joe = new Patient({ patientId: "PT000613", phone: "(248) 347-4952", dob: "03/21/1980", gender: "male"});
  await alex.save();
  await joe.save();
  
  await User.deleteMany({});
  var alexeyBabichev = new User({firstName: "Alexey", lastName: "Babichev", email: "user@gmail.com"});
  var nikiPatel = new User({firstName: "Niki", lastName: "Patel", email: "niki.patel@gmail.com"});
  var sihunAlexKim = new User({firstName: "Sihun Alex", lastName: "Kim", email: "sihun.kim@gmail.com"});
  var jeffreyHotaling = new User({firstName: "Jeffrey", lastName: "Hotaling", email: "hotaling@gmail.com"});
  var adamFolbe = new User({firstName: "Adam", lastName: "Folbe", email: "folbe@gmail.com"});
  var mobeenShirazi = new User({firstName: "Mobeen", lastName: "Shirazi", email: "shirazi@gmail.com"});
  var peterWormald = new User({firstName: "Peter", lastName: "Wormald", email: "wormald@gmail.com"});
  var erichVyskocil = new User({firstName: "Erich", lastName: "Vyskocil", email: "vyskocil@gmail.com"});
  var patientEncounter = new User({firstName: "Patient", lastName: "Encounter", email: "encounter@gmail.com"});
  
  var salt = await bcrypt.genSalt(10);
  alexeyBabichev.password = await bcrypt.hash("123456", salt);
  salt = await bcrypt.genSalt(10);
  nikiPatel.password = await bcrypt.hash("123456", salt);
  salt = await bcrypt.genSalt(10);
  sihunAlexKim.password = await bcrypt.hash("123456", salt);
  salt = await bcrypt.genSalt(10);
  jeffreyHotaling.password = await bcrypt.hash("123456", salt);
  salt = await bcrypt.genSalt(10);
  adamFolbe.password = await bcrypt.hash("123456", salt);
  salt = await bcrypt.genSalt(10);
  mobeenShirazi.password = await bcrypt.hash("123456", salt);
  salt = await bcrypt.genSalt(10);
  peterWormald.password = await bcrypt.hash("123456", salt);
  salt = await bcrypt.genSalt(10);
  erichVyskocil.password = await bcrypt.hash("123456", salt);
  salt = await bcrypt.genSalt(10);
  patientEncounter.password = await bcrypt.hash("123456", salt);
  
  await alexeyBabichev.save();
  await nikiPatel.save();
  await sihunAlexKim.save();
  await jeffreyHotaling.save();
  await adamFolbe.save();
  await mobeenShirazi.save();
  await peterWormald.save();
  await erichVyskocil.save();
  await patientEncounter.save();
  
  const dataSessions = [
    { exists: false, sessionId: 2829, started: "Mar 31, 2020 1:10 PM", ended: "Mar 31, 2020 1:15 PM", provider: patientEncounter._id, expert: alexeyBabichev._id, group: "Quintree Testing", patient: alex._id, complaint: "test-1", overread: "As the scope passed into the nasophyarynx there were no masses or obstruction of the Eustachian tube orifices. The velum was noted to close fully upon swallow. The mucosa was healthy and pink. The base of tongue, and the vallecula showed normal size structure and orientation. As the scope passed by the epiglottis the false and true vocal cords could be visualized. The vocal cords moved symmetrically and were without lesion. Reflux changes noted in the oropharynx." },
    { exists: false, sessionId: 2828, started: "Mar 14, 2020 5:10 PM", ended: "Mar 14, 2020 5:15 PM", provider: nikiPatel._id, expert: sihunAlexKim._id, group: "Affiliated ENT - Dr. Kim", patient: joe._id, complaint: "compliant", overread: "some text 1 2 3 4 5 6 7 8 9 overread dfhd jsdhf asfh jhfjdf dj jsdhfsdl sjd djf h" },
    { exists: true, sessionId: 2827, started: "Feb 26, 2020 3:10 PM", ended: "Feb 26, 2020 3:15 PM", provider: patientEncounter._id, expert: jeffreyHotaling._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2826, started: "Feb 20, 2020 10:10 AM", ended: "Feb 20, 2020 10:18 AM", provider: patientEncounter._id, expert: adamFolbe._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2825, started: "Feb 20, 2020 11:10 AM", ended: "Feb 20, 2020 11:26 AM", provider: patientEncounter._id, expert: mobeenShirazi._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2824, started: "Feb 12, 2020 1:10 PM", ended: "Feb 12, 2020 1:18 PM", provider: patientEncounter._id, expert: alexeyBabichev._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2823, started: "Jan 20, 2020 4:10 PM", ended: "Jan 20, 2020 4:17 PM", provider: patientEncounter._id, expert: adamFolbe._id, group: "Wayne State Residents", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2822, started: "Jan 19, 2020 3:10 PM", ended: "Jan 19, 2020 3:35 PM", provider: nikiPatel._id, expert: jeffreyHotaling._id, group: "Wayne State Residents", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2821, started: "Jan 19, 2020 3:45 PM", ended: "Jan 19, 2020 3:55 PM", provider: patientEncounter._id, expert: sihunAlexKim._id, group: "Affiliated ENT - Dr. Kim", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2820, started: "Jan 03, 2020 8:10 AM", ended: "Jan 03, 2020 8:15 AM", provider: nikiPatel._id, expert: alexeyBabichev._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2819, started: "Dec 15, 2019 6:10 PM", ended: "Dec 15, 2019 6:19 PM", provider: patientEncounter._id, expert: adamFolbe._id, group: "Wayne State Residents", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2818, started: "Dec 14, 2019 8:10 AM", ended: "Dec 14, 2019 8:26 AM", provider: patientEncounter._id, expert: alexeyBabichev._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2817, started: "Dec 10, 2019 10:10 AM", ended: "Dec 10, 2019 10:25 AM", provider: patientEncounter._id, expert: alexeyBabichev._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    
    { exists: true, sessionId: 2730, started: "Apr 04, 2020 2:10 PM", ended: "Apr 04, 2020 2:15 PM", provider: patientEncounter._id, expert: peterWormald._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2729, started: "Mar 31, 2020 1:10 PM", ended: "Mar 31, 2020 1:15 PM", provider: patientEncounter._id, expert: alexeyBabichev._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2728, started: "Mar 14, 2020 5:10 PM", ended: "Mar 14, 2020 5:15 PM", provider: nikiPatel._id, expert: sihunAlexKim._id, group: "Affiliated ENT - Dr. Kim", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2727, started: "Feb 26, 2020 3:10 PM", ended: "Feb 26, 2020 3:15 PM", provider: patientEncounter._id, expert: jeffreyHotaling._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2726, started: "Feb 20, 2020 10:10 AM", ended: "Feb 20, 2020 10:18 AM", provider: patientEncounter._id, expert: adamFolbe._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2725, started: "Feb 20, 2020 11:10 AM", ended: "Feb 20, 2020 11:26 AM", provider: patientEncounter._id, expert: mobeenShirazi._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2724, started: "Feb 12, 2020 1:10 PM", ended: "Feb 12, 2020 1:18 PM", provider: patientEncounter._id, expert: alexeyBabichev._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2723, started: "Jan 20, 2020 4:10 PM", ended: "Jan 20, 2020 4:17 PM", provider: patientEncounter._id, expert: adamFolbe._id, group: "Wayne State Residents", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2722, started: "Jan 19, 2020 3:10 PM", ended: "Jan 19, 2020 3:35 PM", provider: nikiPatel._id, expert: jeffreyHotaling._id, group: "Wayne State Residents", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2721, started: "Jan 19, 2020 3:45 PM", ended: "Jan 19, 2020 3:55 PM", provider: patientEncounter._id, expert: sihunAlexKim._id, group: "Affiliated ENT - Dr. Kim", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2720, started: "Jan 03, 2020 8:10 AM", ended: "Jan 03, 2020 8:15 AM", provider: nikiPatel._id, expert: alexeyBabichev._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2719, started: "Dec 15, 2019 6:10 PM", ended: "Dec 15, 2019 6:19 PM", provider: patientEncounter._id, expert: adamFolbe._id, group: "Wayne State Residents", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2718, started: "Dec 14, 2019 8:10 AM", ended: "Dec 14, 2019 8:26 AM", provider: patientEncounter._id, expert: alexeyBabichev._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2717, started: "Dec 10, 2019 10:10 AM", ended: "Dec 10, 2019 10:25 AM", provider: patientEncounter._id, expert: alexeyBabichev._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2716, started: "Aug 7, 2020 12:55 PM", ended: "Aug 7, 2020 1:10 PM", provider: patientEncounter._id, expert: sihunAlexKim._id, group: "Affiliated ENT - Dr. Kim", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2715, started: "Jul 26, 2020 1:05 PM", ended: "Jul 26, 2020 1:07 PM", provider: patientEncounter._id, expert: alexeyBabichev._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2714, started: "Jul 25, 2020 2:10 PM", ended: "Jul 25, 2020 2:18 PM", provider: patientEncounter._id, expert: sihunAlexKim._id, group: "Affiliated ENT - Dr. Kim", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2713, started: "Jul 24, 2020 3:10 PM", ended: "Jul 24, 2020 3:15 PM", provider: erichVyskocil._id, expert: peterWormald._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2712, started: "Jul 21, 2020 4:10 PM", ended: "Jul 21, 2020 4:19 PM", provider: patientEncounter._id, expert: alexeyBabichev._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2711, started: "Jul 15, 2020 5:10 PM", ended: "Jul 15, 2020 5:18 PM", provider: patientEncounter._id, expert: peterWormald._id, group: "Wayne State Residents", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2710, started: "Jun 15, 2020 1:10 PM", ended: "Jun 15, 2020 1:15 PM", provider: patientEncounter._id, expert: sihunAlexKim._id, group: "Affiliated ENT - Dr. Kim", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2709, started: "Jun 12, 2020 3:10 PM", ended: "Jun 12, 2020 3:20 PM", provider: erichVyskocil._id, expert: adamFolbe._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2708, started: "Jun 08, 2020 11:10 AM", ended: "Jun 08, 2020 11:15 AM", provider: patientEncounter._id, expert: mobeenShirazi._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2707, started: "May 20, 2020 2:10 PM", ended: "May 20, 2020 2:19 PM", provider: patientEncounter._id, expert: peterWormald._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2706, started: "May 19, 2020 4:10 PM", ended: "May 19, 2020 4:16 PM", provider: patientEncounter._id, expert: alexeyBabichev._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2705, started: "May 18, 2020 6:10 PM", ended: "May 18, 2020 6:25 PM", provider: patientEncounter._id, expert: adamFolbe._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2704, started: "May 05, 2020 8:10 PM", ended: "May 05, 2020 8:21 PM", provider: erichVyskocil._id, expert: alexeyBabichev._id, group: "Wayne State Residents", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2703, started: "Apr 22, 2020 1:10 PM", ended: "Apr 22, 2020 1:23 PM", provider: patientEncounter._id, expert: peterWormald._id, group: "Wayne State Residents", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2702, started: "Apr 20, 2020 3:10 PM", ended: "Apr 20, 2020 3:35 PM", provider: patientEncounter._id, expert: sihunAlexKim._id, group: "Affiliated ENT - Dr. Kim", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2701, started: "Apr 06, 2020 4:10 PM", ended: "Apr 06, 2020 4:15 PM", provider: nikiPatel._id, expert: alexeyBabichev._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2700, started: "Apr 04, 2020 2:10 PM", ended: "Apr 04, 2020 2:15 PM", provider: patientEncounter._id, expert: peterWormald._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2630, started: "Apr 04, 2020 2:10 PM", ended: "Apr 04, 2020 2:15 PM", provider: patientEncounter._id, expert: peterWormald._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2629, started: "Mar 31, 2020 1:10 PM", ended: "Mar 31, 2020 1:15 PM", provider: patientEncounter._id, expert: alexeyBabichev._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2628, started: "Mar 14, 2020 5:10 PM", ended: "Mar 14, 2020 5:15 PM", provider: nikiPatel._id, expert: sihunAlexKim._id, group: "Affiliated ENT - Dr. Kim", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2627, started: "Feb 26, 2020 3:10 PM", ended: "Feb 26, 2020 3:15 PM", provider: patientEncounter._id, expert: jeffreyHotaling._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2626, started: "Feb 20, 2020 10:10 AM", ended: "Feb 20, 2020 10:18 AM", provider: patientEncounter._id, expert: adamFolbe._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2625, started: "Feb 20, 2020 11:10 AM", ended: "Feb 20, 2020 11:26 AM", provider: patientEncounter._id, expert: mobeenShirazi._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2624, started: "Feb 12, 2020 1:10 PM", ended: "Feb 12, 2020 1:18 PM", provider: patientEncounter._id, expert: alexeyBabichev._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2623, started: "Jan 20, 2020 4:10 PM", ended: "Jan 20, 2020 4:17 PM", provider: patientEncounter._id, expert: adamFolbe._id, group: "Wayne State Residents", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2622, started: "Jan 19, 2020 3:10 PM", ended: "Jan 19, 2020 3:35 PM", provider: nikiPatel._id, expert: jeffreyHotaling._id, group: "Wayne State Residents", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2621, started: "Jan 19, 2020 3:45 PM", ended: "Jan 19, 2020 3:55 PM", provider: patientEncounter._id, expert: sihunAlexKim._id, group: "Affiliated ENT - Dr. Kim", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2620, started: "Jan 03, 2020 8:10 AM", ended: "Jan 03, 2020 8:15 AM", provider: nikiPatel._id, expert: alexeyBabichev._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2619, started: "Dec 15, 2019 6:10 PM", ended: "Dec 15, 2019 6:19 PM", provider: patientEncounter._id, expert: adamFolbe._id, group: "Wayne State Residents", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2618, started: "Dec 14, 2019 8:10 AM", ended: "Dec 14, 2019 8:26 AM", provider: patientEncounter._id, expert: alexeyBabichev._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2617, started: "Dec 10, 2019 10:10 AM", ended: "Dec 10, 2019 10:25 AM", provider: patientEncounter._id, expert: alexeyBabichev._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2616, started: "Aug 7, 2020 12:55 PM", ended: "Aug 7, 2020 1:10 PM", provider: patientEncounter._id, expert: sihunAlexKim._id, group: "Affiliated ENT - Dr. Kim", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2615, started: "Jul 26, 2020 1:05 PM", ended: "Jul 26, 2020 1:07 PM", provider: patientEncounter._id, expert: alexeyBabichev._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2614, started: "Jul 25, 2020 2:10 PM", ended: "Jul 25, 2020 2:18 PM", provider: patientEncounter._id, expert: sihunAlexKim._id, group: "Affiliated ENT - Dr. Kim", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2613, started: "Jul 24, 2020 3:10 PM", ended: "Jul 24, 2020 3:15 PM", provider: erichVyskocil._id, expert: peterWormald._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2612, started: "Jul 21, 2020 4:10 PM", ended: "Jul 21, 2020 4:19 PM", provider: patientEncounter._id, expert: alexeyBabichev._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2611, started: "Jul 15, 2020 5:10 PM", ended: "Jul 15, 2020 5:18 PM", provider: patientEncounter._id, expert: peterWormald._id, group: "Wayne State Residents", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2610, started: "Jun 15, 2020 1:10 PM", ended: "Jun 15, 2020 1:15 PM", provider: patientEncounter._id, expert: sihunAlexKim._id, group: "Affiliated ENT - Dr. Kim", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2609, started: "Jun 12, 2020 3:10 PM", ended: "Jun 12, 2020 3:20 PM", provider: erichVyskocil._id, expert: adamFolbe._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2608, started: "Jun 08, 2020 11:10 AM", ended: "Jun 08, 2020 11:15 AM", provider: patientEncounter._id, expert: mobeenShirazi._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2607, started: "May 20, 2020 2:10 PM", ended: "May 20, 2020 2:19 PM", provider: patientEncounter._id, expert: peterWormald._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2606, started: "May 19, 2020 4:10 PM", ended: "May 19, 2020 4:16 PM", provider: patientEncounter._id, expert: alexeyBabichev._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2605, started: "May 18, 2020 6:10 PM", ended: "May 18, 2020 6:25 PM", provider: patientEncounter._id, expert: adamFolbe._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2604, started: "May 05, 2020 8:10 PM", ended: "May 05, 2020 8:21 PM", provider: erichVyskocil._id, expert: alexeyBabichev._id, group: "Wayne State Residents", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2603, started: "Apr 22, 2020 1:10 PM", ended: "Apr 22, 2020 1:23 PM", provider: patientEncounter._id, expert: peterWormald._id, group: "Wayne State Residents", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2602, started: "Apr 21, 2020 4:10 PM", ended: "Apr 21, 2020 4:25 PM", provider: patientEncounter._id, expert: jeffreyHotaling._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2601, started: "Apr 20, 2020 3:10 PM", ended: "Apr 20, 2020 3:35 PM", provider: patientEncounter._id, expert: sihunAlexKim._id, group: "Affiliated ENT - Dr. Kim", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2600, started: "Apr 06, 2020 4:10 PM", ended: "Apr 06, 2020 4:15 PM", provider: nikiPatel._id, expert: alexeyBabichev._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2547, started: "Aug 7, 2020 12:55 PM", ended: "Aug 7, 2020 1:10 PM", provider: patientEncounter._id, expert: sihunAlexKim._id, group: "Affiliated ENT - Dr. Kim", patient: alex._id, complaint: "test-1", overread: "test-2" },
    { exists: true, sessionId: 2546, started: "Jul 26, 2020 1:05 PM", ended: "Jul 26, 2020 1:07 PM", provider: patientEncounter._id, expert: alexeyBabichev._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2545, started: "Jul 25, 2020 2:10 PM", ended: "Jul 25, 2020 2:18 PM", provider: patientEncounter._id, expert: sihunAlexKim._id, group: "Affiliated ENT - Dr. Kim", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2544, started: "Jul 24, 2020 3:10 PM", ended: "Jul 24, 2020 3:15 PM", provider: erichVyskocil._id, expert: peterWormald._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2543, started: "Jul 21, 2020 4:10 PM", ended: "Jul 21, 2020 4:19 PM", provider: patientEncounter._id, expert: alexeyBabichev._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2542, started: "Jul 15, 2020 5:10 PM", ended: "Jul 15, 2020 5:18 PM", provider: patientEncounter._id, expert: peterWormald._id, group: "Wayne State Residents", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2541, started: "Jun 15, 2020 1:10 PM", ended: "Jun 15, 2020 1:15 PM", provider: patientEncounter._id, expert: sihunAlexKim._id, group: "Affiliated ENT - Dr. Kim", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2540, started: "Jun 12, 2020 3:10 PM", ended: "Jun 12, 2020 3:20 PM", provider: erichVyskocil._id, expert: adamFolbe._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2539, started: "Jun 08, 2020 11:10 AM", ended: "Jun 08, 2020 11:15 AM", provider: patientEncounter._id, expert: mobeenShirazi._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2538, started: "May 20, 2020 2:10 PM", ended: "May 20, 2020 2:19 PM", provider: patientEncounter._id, expert: peterWormald._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2537, started: "May 19, 2020 4:10 PM", ended: "May 19, 2020 4:16 PM", provider: patientEncounter._id, expert: alexeyBabichev._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2536, started: "May 18, 2020 6:10 PM", ended: "May 18, 2020 6:25 PM", provider: patientEncounter._id, expert: adamFolbe._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2535, started: "May 05, 2020 8:10 PM", ended: "May 05, 2020 8:21 PM", provider: erichVyskocil._id, expert: alexeyBabichev._id, group: "Wayne State Residents", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2534, started: "Apr 22, 2020 1:10 PM", ended: "Apr 22, 2020 1:23 PM", provider: patientEncounter._id, expert: peterWormald._id, group: "Wayne State Residents", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2533, started: "Apr 21, 2020 4:10 PM", ended: "Apr 21, 2020 4:25 PM", provider: patientEncounter._id, expert: jeffreyHotaling._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2532, started: "Apr 20, 2020 3:10 PM", ended: "Apr 20, 2020 3:35 PM", provider: patientEncounter._id, expert: sihunAlexKim._id, group: "Affiliated ENT - Dr. Kim", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2531, started: "Apr 06, 2020 4:10 PM", ended: "Apr 06, 2020 4:15 PM", provider: nikiPatel._id, expert: alexeyBabichev._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2530, started: "Apr 04, 2020 2:10 PM", ended: "Apr 04, 2020 2:15 PM", provider: patientEncounter._id, expert: peterWormald._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2529, started: "Mar 31, 2020 1:10 PM", ended: "Mar 31, 2020 1:15 PM", provider: patientEncounter._id, expert: alexeyBabichev._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2528, started: "Mar 14, 2020 5:10 PM", ended: "Mar 14, 2020 5:15 PM", provider: nikiPatel._id, expert: sihunAlexKim._id, group: "Affiliated ENT - Dr. Kim", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2527, started: "Feb 26, 2020 3:10 PM", ended: "Feb 26, 2020 3:15 PM", provider: patientEncounter._id, expert: jeffreyHotaling._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2526, started: "Feb 20, 2020 10:10 AM", ended: "Feb 20, 2020 10:18 AM", provider: patientEncounter._id, expert: adamFolbe._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2525, started: "Feb 20, 2020 11:10 AM", ended: "Feb 20, 2020 11:26 AM", provider: patientEncounter._id, expert: mobeenShirazi._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2524, started: "Feb 12, 2020 1:10 PM", ended: "Feb 12, 2020 1:18 PM", provider: patientEncounter._id, expert: alexeyBabichev._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2523, started: "Jan 20, 2020 4:10 PM", ended: "Jan 20, 2020 4:17 PM", provider: patientEncounter._id, expert: adamFolbe._id, group: "Wayne State Residents", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2522, started: "Jan 19, 2020 3:10 PM", ended: "Jan 19, 2020 3:35 PM", provider: nikiPatel._id, expert: jeffreyHotaling._id, group: "Wayne State Residents", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2521, started: "Jan 19, 2020 3:45 PM", ended: "Jan 19, 2020 3:55 PM", provider: patientEncounter._id, expert: sihunAlexKim._id, group: "Affiliated ENT - Dr. Kim", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2520, started: "Jan 03, 2020 8:10 AM", ended: "Jan 03, 2020 8:15 AM", provider: nikiPatel._id, expert: alexeyBabichev._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2519, started: "Dec 15, 2019 6:10 PM", ended: "Dec 15, 2019 6:19 PM", provider: patientEncounter._id, expert: adamFolbe._id, group: "Wayne State Residents", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2518, started: "Dec 14, 2019 8:10 AM", ended: "Dec 14, 2019 8:26 AM", provider: patientEncounter._id, expert: alexeyBabichev._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2517, started: "Dec 10, 2019 10:10 AM", ended: "Dec 10, 2019 10:25 AM", provider: patientEncounter._id, expert: alexeyBabichev._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2516, started: "Aug 7, 2020 12:55 PM", ended: "Aug 7, 2020 1:10 PM", provider: patientEncounter._id, expert: sihunAlexKim._id, group: "Affiliated ENT - Dr. Kim", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2515, started: "Jul 26, 2020 1:05 PM", ended: "Jul 26, 2020 1:07 PM", provider: patientEncounter._id, expert: alexeyBabichev._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2514, started: "Jul 25, 2020 2:10 PM", ended: "Jul 25, 2020 2:18 PM", provider: patientEncounter._id, expert: sihunAlexKim._id, group: "Affiliated ENT - Dr. Kim", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2513, started: "Jul 24, 2020 3:10 PM", ended: "Jul 24, 2020 3:15 PM", provider: erichVyskocil._id, expert: peterWormald._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2512, started: "Jul 21, 2020 4:10 PM", ended: "Jul 21, 2020 4:19 PM", provider: patientEncounter._id, expert: alexeyBabichev._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2511, started: "Jul 15, 2020 5:10 PM", ended: "Jul 15, 2020 5:18 PM", provider: patientEncounter._id, expert: peterWormald._id, group: "Wayne State Residents", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2510, started: "Jun 15, 2020 1:10 PM", ended: "Jun 15, 2020 1:15 PM", provider: patientEncounter._id, expert: sihunAlexKim._id, group: "Affiliated ENT - Dr. Kim", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2509, started: "Jun 12, 2020 3:10 PM", ended: "Jun 12, 2020 3:20 PM", provider: erichVyskocil._id, expert: adamFolbe._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2508, started: "Jun 08, 2020 11:10 AM", ended: "Jun 08, 2020 11:15 AM", provider: patientEncounter._id, expert: mobeenShirazi._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2507, started: "May 20, 2020 2:10 PM", ended: "May 20, 2020 2:19 PM", provider: patientEncounter._id, expert: peterWormald._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2506, started: "May 19, 2020 4:10 PM", ended: "May 19, 2020 4:16 PM", provider: patientEncounter._id, expert: alexeyBabichev._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: false, sessionId: 2505, started: "May 18, 2020 6:10 PM", ended: "May 18, 2020 6:25 PM", provider: patientEncounter._id, expert: adamFolbe._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2504, started: "May 05, 2020 8:10 PM", ended: "May 05, 2020 8:21 PM", provider: erichVyskocil._id, expert: alexeyBabichev._id, group: "Wayne State Residents", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2503, started: "Apr 22, 2020 1:10 PM", ended: "Apr 22, 2020 1:23 PM", provider: patientEncounter._id, expert: peterWormald._id, group: "Wayne State Residents", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2502, started: "Apr 21, 2020 4:10 PM", ended: "Apr 21, 2020 4:25 PM", provider: patientEncounter._id, expert: jeffreyHotaling._id, group: "Quintree Testing", patient: alex._id, complaint: "compliant", overread: "overread" },
    { exists: true, sessionId: 2501, started: "Apr 20, 2020 3:10 PM", ended: "Apr 20, 2020 3:35 PM", provider: patientEncounter._id, expert: sihunAlexKim._id, group: "Affiliated ENT - Dr. Kim", patient: alex._id, complaint: "compliant", overread: "overread" },
    
    ];
  

  await Session.deleteMany({});
  await Session.insertMany(dataSessions);

  mongoose.disconnect();

  console.info("Done!");
}

seed();
