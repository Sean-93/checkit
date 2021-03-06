let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/checkitdb", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true 
});

//mongoose.connect("mongodb://localhost/checkitdb", {
//  useNewUrlParser: true,
//  useFindAndModify: false
//});

let checkitSeed = [
  {
    username: "user01",
    email: "future.user@gmail.net",
    created: new Date().setDate(new Date().getDate()),
    updated: new Date().setDate(new Date().getDate()),
    comments: "This one is a little crazy!",
    url: "https://dry-meadow-70247.herokuapp.com/",
    totalVotes: 1,
    useful: 0,
    interesting: 0,
    unusual: 1
  },
  {
    username: "user02",
    email: "future.user@gmail.net",
    created: new Date().setDate(new Date().getDate()-1),
    updated: new Date().setDate(new Date().getDate()-1),
    comments: "Check this out, it's pretty cool.",
    url: "https://bfeliz.github.io/match-my-mood/",
    totalVotes: 2,
    useful: 1,
    interesting: 1,
    unusual: 0
  },
    {
    username: "user03",
    email: "future.user@gmail.net",
    created: new Date().setDate(new Date().getDate()-2),
    updated: new Date().setDate(new Date().getDate()-2),
    comments: "This one is quite interesting.",
    url: "https://www.usdebtclock.org/",
    totalVotes: 4,
    useful: 1,
    interesting: 3,
    unusual: 0
  },
  {
    username: "user04",
    email: "future.user@gmail.net",
    created: new Date().setDate(new Date().getDate()-3),
    updated: new Date().setDate(new Date().getDate()-3),
    comments: "Lots of useful info at this one.",
    url: "https://www.w3schools.com/",
    totalVotes: 3,
    useful: 3,
    interesting: 0,
    unusual: 0
  },
  {
    username: "user05",
    email: "future.user@gmail.net",
    created: new Date().setDate(new Date().getDate()-4),
    updated: new Date().setDate(new Date().getDate()-4),
    comments: "This one is to test the size of the comments area. It allows for a fair amount of text to be entered. So some may be inclinned to ramble on and on about how bloody wonderful this site is!!",
    url: "https://stardate.org/radio/calendars/",
    totalVotes: 0,
    useful: 0,
    interesting: 0,
    unusual: 0
  }
];

db.Checkit.deleteMany({})
  .then(() => db.Checkit.collection.insertMany(checkitSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
