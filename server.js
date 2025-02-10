const express = require("express");
const cors = require("cors");
const connectDB = require("./MongoDB"); // Import the MongoDB connection function
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB Atlas
connectDB();
const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

const Mongo_URL = process.env.MONGO_URL; // Ensure your .env file contains MONGO_URI

mongoose.connect(Mongo_URL);


app.use("/api", require("./routes"));  // Import and use routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
