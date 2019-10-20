const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator'); // express-validator/check are deprecated use express-validator
const auth = require('../../middleware/auth');

const Post = require('../../models/Post');
const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route   POST api/posts
// @desc    Create a post
// @access  Private
router.post("/",
  [
    auth,
    [
      check('text', 'Text is required')
        .not()
        .isEmpty()
    ]
  ],
  async (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await User.findById(request.user.id).select('-password');

      const newPost = new Post({
        text: request.body.text,
        name: user.name,
        avatar: user.avatar,
        user: request.user.id
      });

      const post = await newPost.save();

      response.json(post);
    } catch (err) {
      console.error(err.message);
      response.status(500).send('Server Error');
    }
  }
);

// @route   GET api/posts
// @desc    Get all posts
// @access  Private

router.get('/', auth, async (request, response) => {
  try {
    // sort by recent post
    const posts = await Post.find().sort({ date: -1 });
    response.json(posts);

  } catch (err) {
    console.error(err.message);
    response.status(500).send('Server Error');
  }
});

// @route   GET api/posts/:id
// @desc    Get post by ID
// @access  Private

router.get('/:id', auth, async (request, response) => {
  try {
    const post = await Post.findById(request.params.id);
    if (!post) {
      return response.status(404).json({ msg: 'Post does not exist' });
    }

    response.json(post);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return response.status(404).json({ msg: 'Post does not exist' });
    }
    response.status(500).send('Server Error');
  }
});

// @route   DELETE api/posts/:id
// @desc    Delete a post
// @access  Private

router.delete('/:id', auth, async (request, response) => {
  try {
    const post = await Post.findById(request.params.id);

    if (!post) {
      return response.status(404).json({ msg: 'Post does not exist' });
    }
    // Check if user own a post
    if (post.user.toString() !== request.user.id) {
      return response.status(401).json({ msg: 'User not authorised' });
    }
    await post.remove();

    response.json({ msg: "Post removed successfully" });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return response.status(404).json({ msg: 'Post does not exist' });
    }
    response.status(500).send('Server Error');
  }
});
module.exports = router;
