import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>TaskPro</h2>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Signup / Login</Link>
          <Link to="/settings">Settings</Link>
        </nav>    
      </div>

      {/* Main Content */}
      <div className="main-content">
        <header className="header">
          <h1 className="header-title">Welcome to TaskPro</h1>
          <p className="hero-subtext">
            {/* Manage your tasks, organize your schedule, and boost your
            productivity with ease. */}
          </p>
        </header>

        {/* Animated Cards Section */}
        <div className="cards-section">
          <div className="animated-card">
            <h3>Organized Task Management</h3>
            <p>Create, categorize, and prioritize tasks with ease.</p>
          </div>
          <div className="animated-card">
            <h3>Time Tracking</h3>
            <p>Monitor your time spent on tasks and improve focus.</p>
          </div>
          <div className="animated-card">
            <h3>Productivity Analytics</h3>
            <p>Analyze your work patterns and track your progress.</p>
          </div>
          <div className="animated-card">
            <h3>Reminders & Notifications</h3>
            <p>Stay on top of your tasks with timely notifications.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta-section">
          <h2>Get Started Today!</h2>
          <p>
            Whether you're a professional, student, or entrepreneur, TaskPro is
            tailored to help you achieve your productivity goals. Sign up now
            and take the first step toward better task management!
          </p>
          <Link to="/login" className="cta-button">
            Sign Up / Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
