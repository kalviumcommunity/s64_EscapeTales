const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Register User
router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const newUser = new User({ username, email, password });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Login User
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user || user.password !== password) {
            return res.status(401).json({ error: "Invalid credentials" });
        }
        res.json({ message: "Login successful", user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
