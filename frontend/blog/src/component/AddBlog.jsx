import React, { useState } from 'react';
import axios from 'axios';

import './BlogForm.css'; // Custom CSS file for additional styling

const BlogForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [coverImage, setCoverImage] = useState(null);
    const [author, setAuthor] = useState('662facf33cc999ff90a1b290'); // Replace with actual author ID from context/auth

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('coverImage', coverImage);
        formData.append('author', author);

        try {
            const response = await axios.post('http://localhost:3000/api/v1/users/add-blog', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Blog created successfully:', response.data);
        } catch (error) {
            console.error('Error creating blog:', error.response?.data || error.message);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-center">Create Blog</h2>
            <form onSubmit={handleSubmit} className="p-4 border rounded">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        id="title"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                        id="description"
                        className="form-control"
                        rows="5"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="coverImage" className="form-label">Cover Image</label>
                    <input
                        type="file"
                        id="coverImage"
                        className="form-control"
                        onChange={(e) => setCoverImage(e.target.files[0])}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Create Blog</button>
            </form>
        </div>
    );
};

export default BlogForm;
