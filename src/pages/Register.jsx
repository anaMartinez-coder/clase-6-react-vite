// src/pages/Register.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/actions/authActions';

const Register = () => {
  const [userData, setUserData] = useState({ username: '', password: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(userData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" value={userData.username} onChange={handleChange} placeholder="Username" />
      <input type="password" name="password" value={userData.password} onChange={handleChange} placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
