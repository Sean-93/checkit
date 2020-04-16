const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CheckitSchema = new Schema({

    username:
        {
        type: String,
        trim: true,
        required: "Name is required"
        },
    email:
        {
        type: String,
        trim: true
        },
    created:
        {
        type: Date,
        default: Date.now
        },
    updated:
        {
        type: Date,
        default: Date.now
        },
    comments:
        {
        type: String,
        trim: true
        },
    url:
        {
        type: String,
        trim: true
        },
    totalVotes:
        { type: Number },
    useful:
        { type: Number },
    interesting:
         { type: Number },
    unusual:
         { type: Number }

});

const Checkit = mongoose.model("Checkit", CheckitSchema);

module.exports = Checkit;

// categories:
// [
//      { useful: { type: Number }  },
//      { interesting: { type: Number }  },
//      { unusual: { type: Number }  }
// ]
