import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';


const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/v1/users/login', formData);
      console.log(response.data);
      onLogin();
      navigate('/');
      // Handle success (e.g., save token, redirect to dashboard)
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div className='container'>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input className='form-control mb-3 w-50' type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input className='form-control mb-3 w-50' type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button className='btn btn-primary' type="submit">Login</button>
      </form>
      <div>
        <p>If you are not registered, please <Link className='btn btn-danger link' to="/register">register here</Link></p>
      </div>
    </div>
  );
};

export default Login;
