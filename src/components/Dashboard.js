// Dashboard.js
import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>TaskPro</h2>
        <nav>
          <a href="/">Dashboard</a>
          <a href="/">Tasks</a>
          <a href="/">Messages</a>
          <a href="/">Settings</a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <header className="header">
          <h1>Task Management</h1>
          <nav className="header-nav">
            {/* <a href="/">Home</a>
            <a href="/">Dashboard</a>
            <a href="/">Tasks</a>
            <a href="/">My Profile</a>
            <a href="/">Logout</a> */}
          </nav>
        </header>

        <div className="task-board">
          <div className="task-column">
            <h2>Draft</h2>
            <div className="task-card">
              <h3>Web Dashboard</h3>
              <p>Designing</p>
              <p className="progress-text">90% complete - 3 days left</p>
            </div>
          </div>

          <div className="task-column">
            <h2>In Progress</h2>
            <div className="task-card">
              <h3>Mobile App</h3>
              <p>Shopping</p>
              <p className="progress-text">50% complete - 15 days left</p>
            </div>
          </div>

          <div className="task-column">
            <h2>Editing</h2>
            <div className="task-card">
              <h3>Illustration Animation</h3>
              <p>Graphics</p>
              <p className="progress-text">65% complete - 7 days left</p>
            </div>
          </div>

          <div className="task-column">
            <h2>Done</h2>
            <div className="task-card">
              <h3>Marketing Presentation</h3>
              <p>Strategy</p>
              <p>Task completed</p>
            </div>
          </div>
        </div>

        {/* User Info Section */}
        {/* <div className="user-section">
          <div className="user-card">
            <img src="https://via.placeholder.com/100" alt="User Avatar" />
            <h3>Name Surname</h3>
            <p>Plan: 12:00 - 13:00</p>
            <button>Upgrade Plan</button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Dashboard;
