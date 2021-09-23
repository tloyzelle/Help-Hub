const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const gigSeed = [
  {
    title: "Mow my lawn please",
    payment: "$50",
    description:
      "I've let my lawn get away from me. Someone please help!",
    date: "Anytime!"
  },
  {
    title: "Cut down my tree!",
    payment: "Free Firewood",
    description:
      "Need someone to cut down this pesky tree in my front yard!",
    date: "No later than 11/11/22"
  },
  {
    title: "Walk my dog",
    payment: "$7 each walk",
    description:
      "I need someone that can come walk my dog, Coop, on Monday mornings",
    date: "Every Monday Morning before 8:00am"
  },
  {
    title: "Need someone to give my car a wash",
    payment: "$30",
    description:
      "I have a dirty white Subaru that needs a good wash. I have all of the cleaning supplies, i just can't walk so i need someone to help.",
    date: "Wednesday"
  },
];

db.Gig
  .remove({})
  .then(() => db.Gig.collection.insertMany(gigSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
