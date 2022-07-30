const express = require('express');
const router = express.Router();
const { getAuthor } = require('../controllers/lyrics.js');

router.get('/', getAuthor);

module.exports = router;
