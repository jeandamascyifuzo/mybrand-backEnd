const express = require('express')
const router = express.Router()
const commentController = require('../controllers/comment')

router.post('/:id',commentController.addComment )
router.get('/:id', commentController.getComments)

module.exports = router