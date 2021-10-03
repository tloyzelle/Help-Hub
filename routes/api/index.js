const router = require("express").Router();
const gigRoutes = require("./gigs");

// gig routes
router.use("/gigs", gigRoutes);

module.exports = router;
