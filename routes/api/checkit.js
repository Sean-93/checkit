const router = require("express").Router();
const checkitController = require("../../controllers/checkitController");

// Matches with "/api/checkit"
router.route("/")
  .get(checkitController.findAll)
  .post(checkitController.create);

// Matches with "/api/checkit/:id"
router
  .route("/:id")
  .get(checkitController.findById)
  .put(checkitController.update)
  .delete(checkitController.remove);

module.exports = router;
