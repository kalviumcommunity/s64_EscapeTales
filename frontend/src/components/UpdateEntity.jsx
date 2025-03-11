import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UpdateEntity.css';

const UpdateEntity = () => {
    const [entityId, setEntityId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedEntity = { title, description };

        try {
            const response = await fetch(`/api/entities/${entityId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedEntity),
            });

            if (response.ok) {
                alert('Entity updated successfully!');
                navigate('/stories');  // Redirect to Stories page after updating
            } else {
                alert('Failed to update entity. Please try again.');
            }
        } catch (error) {
            console.error('Error updating entity:', error);
            alert('Error updating entity. Check the console for details.');
        }
    };

    return (
        <div className="update-entity-container">
            <h2>Update Entity</h2>
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
                <button type="submit">Update Entity</button>
            </form>
        </div>
    );
};

export default UpdateEntity;