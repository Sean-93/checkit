const db = require("../models");

// Defining methods for the checkitController
module.exports = {
  findAll: function(req, res) {
    //console.log("findAll ", req);
    db.Checkit
      .find(req.query)
      .sort({ totalVotes: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    //console.log("findById ", req);
    db.Checkit
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Checkit
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log(req.body);

     db.Checkit
        .findOneAndUpdate({
            _id: req.params.id   
        },req.body)
        .then(dbModel=> res.json(dbModel))
        .catch(err => res.status(422).json(err));
  },
  // remove: function(req, res) {
  //   db.Checkit
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
