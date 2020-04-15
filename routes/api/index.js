const router = require("express").Router();
const checkitRoutes = require("./checkit");

console.log("routes/api/index.js");

// checkit routes
router.use("/checkit", checkitRoutes);

module.exports = router;
