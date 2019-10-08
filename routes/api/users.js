const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator'); // express-validator/check are deprecated use express-validator

// @route   POST api/users
// @desc    Test route
// @access  Public
router.post(
  '/',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 5 or more characters'
    ).isLength({ min: 5 })
  ],
  (request, response) => {
    const errors = validationResult(request);
    // handle errors in a form
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
    response.send('Users route');
  }
);

module.exports = router;
