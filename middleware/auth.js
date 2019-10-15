const jwt = require('jsonwebtoken');
const config = require('config');

// Exporting of a middleware function that has request/response object available
module.exports = function(request, response, next) {
  // Get token from the header
  const token = request.header('x-auth-token');

  // Check if not token
  if (!token) {
    return response.status(401).json({
      msg: 'No token, authorization has been denied for this request',
    });
  }
  // Verify and validate access token
  try {
    // decoding token through JWT library
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    // Geting right user profile after decoding jwt
    request.user = decoded.user;
    next();
  } catch (err) {
    response
      .status(401)
      .json({ msg: 'Access Token is not valid or has expired' });
  }
};
