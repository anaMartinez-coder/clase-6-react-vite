// src/pages/Home.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions/authActions';

const Home = () => {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h1>Bienvenido, {user.username}!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
