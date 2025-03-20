import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/UpdateEntity.css';

const UpdateEntity = () => {
    const [entityId, setEntityId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [feedback, setFeedback] = useState(null);  // For better UI feedback
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!entityId.trim() || !title.trim() || !description.trim()) {
            setFeedback({ type: 'error', message: 'All fields are required.' });
            return;
        }

        const updatedEntity = { title, description };

        try {
            setLoading(true);
            const response = await fetch(`/api/entities/${entityId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedEntity),
            });

            const result = await response.json();

            if (response.ok) {
                setFeedback({ type: 'success', message: 'Entity updated successfully!' });
                setTimeout(() => navigate('/stories'), 1500);  // Slight delay for better UX
            } else {
                setFeedback({
                    type: 'error',
                    message: result?.error || 'Failed to update entity. Please try again.',
                });
            }
        } catch (error) {
            console.error('Error updating entity:', error);
            setFeedback({
                type: 'error',
                message: 'Network error or server issue. Please try again later.',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="update-entity-container">
            <h2>Update Entity</h2>

            {feedback && (
                <div
                    className={`feedback-message ${feedback.type === 'error' ? 'error' : 'success'}`}
                >
                    {feedback.message}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Entity ID"
                    value={entityId}
                    onChange={(e) => setEntityId(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Updating...' : 'Update Entity'}
                </button>
            </form>
        </div>
    );
};

export default UpdateEntity;
