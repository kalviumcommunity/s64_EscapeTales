// src/services/apiServices.js

const BASE_URL = '/api';

/**
 * Fetch all stories
 */
export const fetchStories = async () => {
    try {
        const response = await fetch(`${BASE_URL}/stories`);
        if (!response.ok) throw new Error('Failed to fetch stories');
        return await response.json();
    } catch (error) {
        console.error('Error fetching stories:', error);
        throw error;
    }
};

/**
 * Add a new story
 */
export const addStory = async (storyData) => {
    try {
        const response = await fetch(`${BASE_URL}/stories`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(storyData),
        });
        if (!response.ok) throw new Error('Failed to add story');
        return await response.json();
    } catch (error) {
        console.error('Error adding story:', error);
        throw error;
    }
};

/**
 * Update a story
 */
export const updateStory = async (id, updatedData) => {
    try {
        const response = await fetch(`${BASE_URL}/stories/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedData),
        });
        if (!response.ok) throw new Error('Failed to update story');
        return await response.json();
    } catch (error) {
        console.error('Error updating story:', error);
        throw error;
    }
};

/**
 * Delete a story
 */
export const deleteStory = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/stories/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) throw new Error('Failed to delete story');
        return true; // Return true if deletion is successful
    } catch (error) {
        console.error('Error deleting story:', error);
        throw error;
    }
};
