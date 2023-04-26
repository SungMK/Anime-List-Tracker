const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notes');

router.post('/animes/:id/notes', notesController.create);

// router.delete('/animes/:id/', notesController.delete);

module.exports = router;