const express = require('express');
const weatherController = require('../controllers/weatherController');

const router = express.Router();

router.post('/order-weather', (req, res) => weatherController.orderWeather(req, res));
router.post('/verify-land', (req, res) => weatherController.verifyLand(req, res));
router.get('/recommendations', (req, res) => weatherController.getRecommendations(req, res));

module.exports = router;
