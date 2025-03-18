const mongoose = require("mongoose");

const StorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    author: {
        type: String,
        required: true,
        trim: true,
    },
    content: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        enum: ["Fiction", "Non-Fiction", "Horror", "Comedy", "Sci-Fi", "Mystery", "Fantasy"],
        default: "Fiction"
    },
    publishedDate: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

module.exports = mongoose.model("Story", StorySchema);
