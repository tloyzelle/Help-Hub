const router = require("express").Router();
const gigRoutes = require("./gigs");

// Book routes
router.use("/gigs", gigRoutes);

module.exports = router;
