let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/checkitdb", {
    useNewUrlParser: true,
    useFindAndModify: false
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
    categories: [
      {
        useful: 0,
        interesting: 0,
        unusual: 1
      }
    ]
  },
  {
    username: "user02",
    email: "future.user@gmail.net",
    created: new Date().setDate(new Date().getDate()-1),
    updated: new Date().setDate(new Date().getDate()-1),
    comments: "Check this out, it's pretty cool!",
    url: "https://bfeliz.github.io/match-my-mood/",
    totalVotes: 2,
    categories: [
      {
        useful: 1,
        interesting: 1,
        unusual: 0
      }
    ]
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
