const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notes');

router.post('/animes/:id/notes', notesController.create);

module.exports = router;