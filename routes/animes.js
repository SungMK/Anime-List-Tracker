const express = require('express');
const router = express.Router();
const animesController = require('../controllers/animes');

// GET / Animes - Index Route
router.get('/', animesController.index);

module.exports = router;