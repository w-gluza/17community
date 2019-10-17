const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route   GET api/profile/me
// @desc    Get current users profile
// @access  Private
router.get('/me', auth, async (request, response) => {
  try {
    const profile = await Profile.findOne({ user: request.user.id }).populate(
      'user',
      ['name', 'avatar'],
    );
    if (!profile) {
      return response
        .status(400)
        .json({ msg: 'The specified user does not have a profile' });
    }
    response.json(profile);
  } catch (err) {
    console.error(err.message);
    response.status(500).send('Server Error');
  }
});

module.exports = router;
