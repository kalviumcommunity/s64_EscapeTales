import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDropdown = ({ onSelectUser }) => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('/users'); // Assuming your backend endpoint is `/users`
                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    const handleChange = (e) => {
        const userId = e.target.value;
        setSelectedUser(userId);
        onSelectUser(userId); // Pass selected user ID to parent
    };

    return (
        <div className="user-dropdown">
            <label htmlFor="user-select">Filter by User:</label>
            <select
                id="user-select"
                value={selectedUser}
                onChange={handleChange}
            >
                <option value="">All Users</option>
                {users.map((user) => (
                    <option key={user._id} value={user._id}>
                        {user.username}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default UserDropdown;
