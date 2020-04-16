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
    username: "user01",
    email: "future.user@gmail.net",
    created: new Date().setDate(new Date().getDate()-2),
    updated: new Date().setDate(new Date().getDate()-2),
    comments: "This one is a little crazy!",
    url: "https://wet-field-70247.herokuapp.com/",
    totalVotes: 3,
    useful: 0,
    interesting: 1,
    unusual: 2
  },
  {
    username: "user03",
    email: "future.user@gmail.net",
    created: new Date().setDate(new Date().getDate()-2),
    updated: new Date().setDate(new Date().getDate()-2),
    comments: "This one is quite interesting.",
    url: "https://abcdef.github.io/truely-interesting/",
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
    comments: "This one is quite useful.",
    url: "https://abcdef.github.io/very-useful/",
    totalVotes: 3,
    useful: 3,
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
