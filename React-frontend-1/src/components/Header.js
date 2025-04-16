import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Header() {
  const navigate = useNavigate();

  const navToLogin = () => {
    navigate('/login');
  };

  const navToRegister = () => {
    navigate('/register');
  };
  return (
    
    <nav className="navbar navbar-expand-lg sticky-top shadow-sm " style={{backgroundColor:'white',color:'black',zIndex:1000}}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/users">UserApp</Link>
        <div className="collapse navbar-collapse" style={{display:'flex',gap:'20px'}}>
        <button className="btn btn-dark" onClick={navToLogin}>Login</button>
        <button className="btn btn-dark" onClick={navToRegister}>SignUp</button>
        </div>
      </div>
    </nav>
  );
}

export default Header;