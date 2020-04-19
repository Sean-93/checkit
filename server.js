const cors = require("cors");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const express = require("express");
const logger = require("morgan");
const routes = require("./routes");
const mongoose = require("mongoose");
const path = require("path");

// Create a new Express app
const app = express();

const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === "production" ) {app.use (express.static("client/build"));}
const db = require("./models");

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Add routes
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/checkitdb", {
  useNewUrlParser: true,
});

// Accept cross-origin requests from the frontend app
app.use(cors({ origin: "http://localhost:3000" }));

// Set up Auth0 configuration
const authConfig = {
  domain: "dev-po2p13yk.auth0.com",
  audience: "https://postit-api-endpoin/",
};

// Define middleware that validates incoming bearer tokens
// using JWKS from dev-po2p13yk.auth0.com
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`,
  }),

  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithm: ["RS256"],
});

// Define an endpoint that must be called with an access token
app.get("/api/external", checkJwt, (req, res) => {
  res.send({
    msg: "Your Access Token was successfully validated!",
  });
});

// wip *********
// app.get("/api/checkit", (req, res) => {
//   console.log('get/find /api/checkit');
//   db.Checkit.find({})
//     .then(dbCheckit => {
//       res.json(dbCheckit);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });
// ***********

// Start the app
// If no API routes are hit, send the React app
app.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(PORT, () => console.log('API listening on 3001'));

// Start the server
// app.listen(PORT, () => {
//   console.log(`App running on port ${PORT}!`);
// });
