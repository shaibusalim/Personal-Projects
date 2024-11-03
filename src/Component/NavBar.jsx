
import React from 'react';
import { Link } from 'react-router-dom';
import "./navBar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/diary">Food Diary</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
