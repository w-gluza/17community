const mongoose = require('mongoose');
const config = require('config');

// Get access to MongoDB
const db = config.get('mongoURI');

// Fetch data from database with async/await
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true, // do not delete
      useCreateIndex: true
    });
    console.log('MongoDB connected...');
  } catch (error) {
    console.error(error.message);
    // Stop process in case of an error
    process.exit(1);
  }
};

module.exports = connectDB;
