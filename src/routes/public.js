const express = require('express');

const router = express.Router();

const { getIndex, getApi, getLogin, postAuth } = require('../controllers/public');

router.get('/', getIndex);
router.get('/api', getApi);
router.get('/login', getLogin);
router.post('/auth', postAuth);

module.exports = router;
