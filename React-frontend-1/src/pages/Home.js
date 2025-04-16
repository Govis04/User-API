import React from 'react';
import { useNavigate } from "react-router-dom";
import './home.css'
const Home = () => {
  const navigate = useNavigate();

  const navToLogin = () => {
    navigate('/login');
  };

  const navToRegister = () => {
    navigate('/register');
  };

  return (
    <div className="body">
    <div className="container">
      <div className="super-card">
        <button className="btn btn-primary" onClick={navToLogin}>Login</button>
        <button className="btn btn-primary" onClick={navToRegister}>SignUp</button>
      </div>
    </div>
    </div>
  );
}

export default Home;