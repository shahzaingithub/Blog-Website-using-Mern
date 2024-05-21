import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    coverImage: null,
    avatar: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formPayload = new FormData();
    formPayload.append('fullName', formData.fullName);
    formPayload.append('username', formData.username);
    formPayload.append('email', formData.email);
    formPayload.append('password', formData.password);
    formPayload.append('coverImage', formData.coverImage);
    formPayload.append('avatar', formData.avatar);

    try {
      const response = await axios.post('http://localhost:3000/api/v1/users/register', formPayload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      navigate('/login'); // Redirect to login page after successful registration
      // Handle success (e.g., show success message)
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <div>
        <label>Full Name:</label>
        <input className='form-control w-50' type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
      </div>
      <div>
        <label>Username:</label>
        <input className='form-control w-50' type="text" name="username" value={formData.username} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input  className='form-control w-50' type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Password:</label>
        <input  className='form-control w-50' type="password" name="password" value={formData.password} onChange={handleChange} required />
      </div>
      <div>
        <label>Cover Image:</label>
        <input className='form-control w-50' type="file" name="coverImage" onChange={handleFileChange} required />
      </div>
      <div>
        <label>Avatar:</label>
        <input className='form-control w-50' type="file" name="avatar" onChange={handleFileChange} required />
      </div>
      <button className='btn btn-primary mt-3' type="submit">Register</button>
    </form>
  );
};

export default Register;
