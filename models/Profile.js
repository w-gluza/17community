const mongoose = require('mongoose');
<<<<<<< HEAD

=======
>>>>>>> ec30a2850e2a0c4d564b3b88cea31e9f053b5ee7
const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  website: {
    type: String,
  },
  location: {
    type: String,
  },
  status: {
    type: String,
  },
  // interests = skills
  interests: {
    type: [String],
  },
  bio: {
    type: String,
  },
  instagramusername: {
    type: String,
  },
  // social media connections
  social: {
    instagram: {
      type: String,
    },
    facebook: {
      type: String,
    },
    linkedin: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
<<<<<<< HEAD

=======
>>>>>>> ec30a2850e2a0c4d564b3b88cea31e9f053b5ee7
module.exports = Profile = mongoose.model('profile', ProfileSchema);
