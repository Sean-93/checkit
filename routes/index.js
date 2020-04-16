const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

console.log("routes/index.js");

// API Routes
router.use("/api", apiRoutes);



module.exports = router;
