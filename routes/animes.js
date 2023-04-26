const express = require('express');
const router = express.Router();
const animesController = require('../controllers/animes');

// GET / Animes - Index Route
router.get('/', animesController.index);

// GET /Animes/New - New Anime Route
router.get('/new', animesController.new);

// POST /Animes - Create Anime
router.post('/', animesController.create);

module.exports = router;