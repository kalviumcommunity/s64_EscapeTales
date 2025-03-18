const express = require("express");
const router = express.Router();
const Story = require("../models/Story");

// Create Story
router.post("/stories", async (req, res) => {
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
router.get("/stories", async (req, res) => {
    try {
        const stories = await Story.find();
        res.json(stories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get Story by ID
router.get("/stories/:id", async (req, res) => {
    try {
        const story = await Story.findById(req.params.id);
        if (!story) {
            return res.status(404).json({ error: "Story not found" });
        }
        res.json(story);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update Story by ID
router.put("/stories/:id", async (req, res) => {
    const { title, author, content, genre, publishedDate } = req.body;

    if (!title || !author || !content) {
        return res.status(400).json({ error: "Title, author, and content are required" });
    }

    try {
        const updatedStory = await Story.findByIdAndUpdate(req.params.id, { 
            title, author, content, genre, publishedDate 
        }, { new: true });

        if (!updatedStory) {
            return res.status(404).json({ error: "Story not found" });
        }

        res.json(updatedStory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete Story by ID
router.delete("/stories/:id", async (req, res) => {
    try {
        const deletedStory = await Story.findByIdAndDelete(req.params.id);
        if (!deletedStory) {
            return res.status(404).json({ error: "Story not found" });
        }
        res.json({ message: "Story deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;