const router = require("express").Router();
const gigsController = require("../../controllers/gigsController");

// Matches with "/api/gigs"
router.route("/")
  .get(gigsController.findAll)
  .post(gigsController.create);

// Matches with "/api/gigs/:id"
router
  .route("/:id")
  .get(gigsController.findById)
  .put(gigsController.update)
  .delete(gigsController.remove);

module.exports = router;
