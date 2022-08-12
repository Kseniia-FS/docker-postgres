const Router = require("express");
const PostController = require('../controllers/post.controller');

const router = new Router();

router.post('/post', PostController.createPost);
router.get('/post', PostController.getPostByCustomerID);
router.get('/posts', PostController.getPostsWithCustomers);

module.exports = router;