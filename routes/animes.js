const express = require('express');
const router = express.Router();
const animesController = require('../controllers/animes');

// GET / Animes - Index Route
router.get('/', animesController.index);

// GET /Animes/New - New Anime Route
router.get('/new', animesController.new);

//GET /Animes/:id/edit
router.get('/:id/edit', animesController.update)

// GET /Animes/:id - Show Route
router.get('/:id', animesController.show);

// POST /Animes - Create Anime
router.post('/', animesController.create);


// DELETE /Animes
router.delete('/:id', animesController.delete);

// Update /Animes
router.put('/:id', animesController.update);

module.exports = router;