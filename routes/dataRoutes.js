const express = require('express');
const { uploadData, getData } = require('../controllers/dataController');
const authMiddleware = require('../middleware/authMiddleware');
const validateData = require('../middleware/validationMiddleware');

const router = express.Router();

router.post('/upload', authMiddleware, validateData, uploadData);
router.get('/data', authMiddleware, getData);

module.exports = router;
