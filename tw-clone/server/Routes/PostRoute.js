const express = require('express');
const router = express.Router();
const PostController = require('../controllers/PostController');


router.get('/', PostController.GetPost);
router.post('/', PostController.CreatePost)



module.exports = router;


