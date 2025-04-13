const express = require('express');
const { startStream } = require('../controllers/streamController');

const router = express.Router();

router.get('/start-stream', startStream);

module.exports = router;
