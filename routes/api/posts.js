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

module.exports = router;
