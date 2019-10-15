const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator'); // express-validator/check are deprecated use express-validator

const User = require('../../models/User');
// @route   GET api/auth
// @desc    Test route
// @access  Public
router.get('/', auth, async (request, response) => {
  try {
    const user = await User.findById(request.user.id).select('-password');
    response.json(user);
  } catch (err) {
    console.error(err.message);
    response.status(500).send('Server Error');
  }
});

// @route   POST api/auth
// @desc    Authenticate user and get token
// @access  Public
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  async (request, response) => {
    const errors = validationResult(request);
    // Handle errors in a form
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
    const { email, password } = request.body;

    try {
      // See if user exists - we don't want multiple emails
      let user = await User.findOne({ email });

      if (!user) {
        return response.status(400).json({
          errors: [{ msg: 'Authentication failed - invalid credentials' }],
        });
      }
      // compare password input provided by user with encrypted password from DB
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return response.status(400).json({
          errors: [{ msg: 'Authentication failed - invalid credentials' }],
        });
      }

      // Get the payload which includes the user id
      const payload = {
        user: {
          // In MongoDB we would write user._id, however Mongoose allows user.id
          id: user.id,
        },
      };

      // Return JSON Web Token
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        // Expiration optional
        { expiresIn: 36000 },
        (error, token) => {
          if (error) throw error;
          response.json({ token });
        },
      );
    } catch (err) {
      console.error(err.msg);
      response.status(500).send('Server error');
    }
  },
);

module.exports = router;
