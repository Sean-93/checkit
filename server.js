const cors = require("cors");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Create a new Express app
const app = express();

const PORT = process.env.PORT || 3000;
const db = require("./models");

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Routes
require("./routes/html-routes.js")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/checkitdb", { useNewUrlParser: true });


// Accept cross-origin requests from the frontend app
app.use(cors({ origin: 'http://localhost:3000' }));

// Set up Auth0 configuration
const authConfig = {
  domain: "dev-po2p13yk.auth0.com",
  audience: "t4To24B5gSKzLW620WokoJD1OaadPoBi"
};

// Define middleware that validates incoming bearer tokens
// using JWKS from dev-po2p13yk.auth0.com
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),

  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithm: ["RS256"]
});

// Define an endpoint that must be called with an access token
app.get("/api/external", checkJwt, (req, res) => {
  res.send({
    msg: "Your Access Token was successfully validated!"
  });
});


// wip *********
app.get("/api/checkit", (req, res) => {
  console.log('get/find /api/checkit');
  db.Checkit.find({})
    //     .populate("exercises")
    .then(dbCheckit => {
      res.json(dbCheckit);
    })
    .catch(err => {
      res.json(err);
    });
});
// ***********


// Start the app
app.listen(3001, () => console.log('API listening on 3001'));

// Start the server
// app.listen(PORT, () => {
//   console.log(`App running on port ${PORT}!`);
// });

