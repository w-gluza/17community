const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("config");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator"); // express-validator/check are deprecated use express-validator

const User = require("../../models/User");

// @route   POST api/users
// @desc    Test route
// @access  Public
router.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 5 or more characters"
    ).isLength({ min: 5 })
  ],
  async (request, response) => {
    const errors = validationResult(request);
    // Handle errors in a form
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = request.body;

    try {
      // See if user exists - we don't want multiple emails
      let user = await User.findOne({ email });
      if (user) {
        return response
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }
      // Get Gravatar
      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm"
      });

      // Create the user
      user = new User({
        name,
        email,
        avatar,
        password
      });
      // Encrypt the Password
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      // Save the User in the databasde
      await user.save();

      // Get the payload which includes the user id
      const payload = {
        user: {
          // In MongoDB we would write user._id, however Mongoose allows user.id
          id: user.id
        }
      };

      // Return JSON Web Token
      jwr.sign(
        payload,
        config.get("jwtSecret"),
        // Expiration optional
        { expiresIn: 36000 },
        (err, token) => {
          if (error) throw error;
          response.json({ token });
        }
      );
    } catch (err) {
      console.error(err.msg);
      response.status(500).send("Server error");
    }
  }
);

module.exports = router;
