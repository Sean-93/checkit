const router = require("express").Router();
const checkitController = require("../../controllers/checkitController");

console.log("routes/api/checkit");

// Matches with "/api/checkit"
router.route("/").get(checkitController.findAll);

// Matches with "/api/checkit/:id"
router
  .route("/:id")
  .get(checkitController.findById)
  .put(checkitController.update);
// .delete(checkitController.remove);

router.route("/create").post(checkitController.create);

module.exports = router;
