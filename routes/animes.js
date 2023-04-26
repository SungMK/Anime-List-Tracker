const express = require('express');
const router = express.Router();
const animesController = require('../controllers/animes');

// GET / Animes - Index Route
router.get('/', animesController.index);

// GET /Animes/New - New Anime Route
router.get('/new', animesController.new);

// POST /Animes - Create Anime
router.post('/', animesController.create);

// GET /Animes/:id - Show Route
router.get('/:id', animesController.show);

// DELETE /Animes
router.delete('/:id', animesController.delete);

// Update /Animes
router.put('/:id', animesController.update);

module.exports = router;