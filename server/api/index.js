const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit'); // Limits allowed calls for x amount of ms
const slowDown = require('express-slow-down'); // Slows each following request if spammed
const axios = require('axios'); // Use axios to make http requests
// const example = require('./example.js'); ==> load specifc api file

// Limiting number of requests possible for a set amount of time
const limiter = rateLimit({
	windowMs: 30 * 1000, // Time frame (30 seconds * 1000ms)
	max: 10, // Max amount of requests
});

// Slowing down each request after a specific number of requests
const speedLimiter = slowDown({
	windowMs: 30 * 1000, // Time frame (30 seconds * 1000ms)
	delayAfter: 3, // Start delaying after 3 requests within the time frame
	delayMs: 500 // Make each requests 500ms slower
});

router.get('/', limiter, speedLimiter, (req, res) => {
	res.json({
		message: 'API - 👋🌎🌍🌏'
	});
});

// router.use('/example-path', example); ==> to be routed to: api/chosen_path for example

module.exports = router;