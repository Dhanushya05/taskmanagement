// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 
import { FaUserCircle } from "react-icons/fa"; // Icon for user profile

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <h2>TaskPro</h2> 
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/tasks">Tasks</Link></li>
                <li><Link to="/profile">My Profile</Link></li>
            </ul>
            <div className="user-icon">
                <FaUserCircle size={30} />
            </div>
        </nav>
    );
};

export default Navbar;




