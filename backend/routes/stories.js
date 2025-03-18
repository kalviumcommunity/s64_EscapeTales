const express = require("express");
const router = express.Router();
const Story = require("../models/Story");

// Create Story
router.post("/", async (req, res) => {
    const { title, author, content, genre, publishedDate } = req.body;

    if (!title || !author || !content) {
        return res.status(400).json({ error: "Title, author, and content are required" });
    }

    try {
        const newStory = new Story({ title, author, content, genre, publishedDate });
        await newStory.save();
        res.status(201).json(newStory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get All Stories
router.get("/", async (req, res) => {
    try {
        const stories = await Story.find();
        res.json(stories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
