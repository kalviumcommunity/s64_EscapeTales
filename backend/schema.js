const mongoose = require("mongoose");

// Define Schema
const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  createdAt: { type: Date, default: Date.now }
});

// Create and Export Model
const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
