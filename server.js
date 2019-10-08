const express = require("express");
const connectDB = require("./config/db");

// Initialize app with Express
const app = express();

// Connect to database
connectDB();

// Get request and send data to the browser
app.get("/", (request, response) => response.send("API running"));

// Define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

// Define the port for deploy on Heroku || local.host
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
