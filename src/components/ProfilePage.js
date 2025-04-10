// src/components/ProfilePage.js
import React, { useState } from "react";
import "./ProfilePage.css";

const ProfilePage = () => {
    const [profileImage, setProfileImage] = useState("https://via.placeholder.com/100");

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setProfileImage(reader.result); // Image preview
            reader.readAsDataURL(file); // Convert image to base64
        }
    };

    return (
        <div className="profile-dashboard">
            <aside className="profile-sidebar">
                <h3>Profile Menu</h3>
                <ul>
                    <li>Overview</li>
                    <li>Account Settings</li>
                    <li>Task History</li>
                    <li>Notifications</li>
                    <li>Log Out</li>
                </ul>
            </aside>

            <div className="profile-main">
                <h2>My Profile</h2>

                <div className="profile-card">
                    <div className="profile-avatar">
                        <img src={profileImage} alt="User Avatar" className="avatar-img" />
                        <input type="file" accept="image/*" className="upload-input" onChange={handleImageChange} />
                    </div>

                    <h3>Profile Details</h3>
                    <p><strong>Name:</strong> Dhanushya</p>
                    <p><strong>Email:</strong> dhanushya@gmail.com</p>
                    <p><strong>Role:</strong> Project Manager</p>
                    <p><strong>Member Since:</strong> January 2023</p>
                </div>

                <div className="activity-section">
                    <h3>Recent Activity</h3>
                    <ul>
                        <li>Updated project timeline - 2 hours ago</li>
                        <li>Completed task: Web Dashboard UI - 1 day ago</li>
                        <li>Created new task: Mobile App Development - 3 days ago</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
