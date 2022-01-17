const express = require('express')
const router = express.Router()
const checkAuth = require('../midleware/check-auth');
const contactController = require('../controllers/contact')

router.post('/send',contactController.sendMessage)
router.get('/read',contactController.getMessages)

module.exports = router