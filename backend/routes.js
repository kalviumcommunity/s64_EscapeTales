const express = require("express");
const router = express.Router();
const Item = require("./schema"); // Import the schema

// ✅ CREATE - Add a new item
router.post("/items", async (req, res) => {
    try {
      console.log("📌 Incoming Request Body:", req.body); // Debugging log
      const newItem = new Item(req.body);
      await newItem.save();
      res.status(201).json(newItem);
    } catch (error) {
      console.error("❌ Error in POST /items:", error);
      res.status(500).json({ error: error.message });
    }
  });
  

// ✅ READ - Get all items
router.get("/items", async (req, res) => {
  try {
    const items = await Item.find();
    if (items.length === 0) {
      return res.status(404).json({ message: "No items found in MongoDB" });
    }
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ READ - Get a single item by ID
router.get("/items/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ error: "Item not found" });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ UPDATE - Modify an existing item
router.put("/items/:id", async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedItem) return res.status(404).json({ error: "Item not found" });
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ DELETE - Remove an item
router.delete("/items/:id", async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).json({ error: "Item not found" });
    res.json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
