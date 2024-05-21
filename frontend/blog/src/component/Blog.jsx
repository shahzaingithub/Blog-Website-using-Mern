import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/v1/users/get-blogs');
                setBlogs(response.data.data); // Assuming the response follows the ApiResponse format
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
      <div className="container">
          <h2 className="my-4">Blog List</h2>
          {blogs.length === 0 ? (
              <p>No blogs available.</p>
          ) : (
              <div className="row">
                  {blogs.map(blog => (
                      <div className="col-md-4 mb-4" key={blog._id}>
                          <div className="card">
                              <img
                                  className="card-img-top"
                                  src={blog.coverImage}
                                  alt={blog.title}
                                  style={{ height: '200px', objectFit: 'cover' }}
                              />
                              <div className="card-body">
                                  <h5 className="card-title">{blog.title}</h5>
                                  <p className="card-text">{blog.description}</p>
                                  <p className="card-text">
                                      <small className="text-muted">Author: {blog.author.fullName}</small>
                                  </p>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          )}
      </div>
  );
};

export default Blog;
