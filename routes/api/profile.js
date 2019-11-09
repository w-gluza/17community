const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

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
    console.error(err.msg);
    response.status(500).send('Server Error');
  }
});

// @route   GET api/profile
// @desc    Create || update user profile
// @access  Private
router.post(
  '/',
  [
    auth,
    [
      check('status', 'Status is required')
        .not()
        .isEmpty(),
      check('interests', 'Interests are required')
        .not()
        .isEmpty(),
    ],
  ],

  // Here we check for the errors
  async (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
    const {
      website,
      location,
      status,
      interests,
      bio,
      instagramusername,
      instagram,
      facebook,
      linkedin,
    } = request.body;

    // Build profile object fields
    const profileFields = {};
    profileFields.user = request.user.id;
    if (website) profileFields.website = website;
    if (location) profileFields.location = location;
    if (status) profileFields.status = status;
    if (bio) profileFields.bio = bio;
    if (instagramusername) profileFields.instagramusername = instagramusername;

    // Turning interests into array
    if (interests) {
      profileFields.interests = interests
        .split(',')
        .map(interest => interest.trim());
    }

    // Building social profiles object
    profileFields.social = {};
    if (instagram) profileFields.social.instagram = instagram;
    if (facebook) profileFields.social.facebook = facebook;
    if (linkedin) profileFields.social.linkedin = linkedin;

    // Looking through profiles to find the user
    try {
      let profile = await Profile.findOne({ user: request.user.id });
      // If profile exists - update
      if (profile) {
        // If profile is found we update it
        profile = await Profile.findOneAndUpdate(
          { user: request.user.id },
          { $set: profileFields },
          { new: true },
        );

        return response.json(profile);
      }
      // If it is not found we create, and save it and send back
      profile = new Profile(profileFields);

      await profile.save();
      response.json(profile);
    } catch (err) {
      console.error(err.msg);
      response.status(500).send('Server error');
    }
  },
);

// @route   GET api/profile
// @desc    Get all profiles
// @access  Public

router.get('/', async (request, response) => {
  try {
    const profiles = await Profile.find().populate('user', ['name', 'avatar']);
    response.json(profiles);
  } catch (err) {
    console.error(err.msg);
    response.status(500).send('Server error');
  }
});

// @route   GET api/profile/user/:user_id
// @desc    Get profile by user ID
// @access  Public

router.get('/user/:user_id', async (request, response) => {
  try {
    const profile = await Profile.findOne({
      user: request.params.user_id,
    }).populate('user', ['name', 'avatar']);

    if (!profile)
      return response
        .status(400)
        .json({ msg: 'The specified user does not have a profile' });

    response.json(profile);
  } catch (err) {
    console.error(err.msg);
    if (err.kind == 'ObjectId') {
      return response
        .status(400)
        .json({ msg: 'The specified user does not have a profile' });
    }
    response.status(500).send('Server error');
  }
});

// @route   DELETE api/profile
// @desc    Delete profile, user & post
// @access  Private

router.delete('/', auth, async (request, response) => {
  try {
    // delete user posts

    // delete profile
    await Profile.findOneAndRemove({ user: request.user.id });

    // delete remove user
    await User.findOneAndRemove({ _id: request.user.id });

    response.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.msg);
    response.status(500).send('Server error');
  }
});

module.exports = router;
