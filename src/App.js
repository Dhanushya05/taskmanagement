// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import LoginPage from "./components/LoginPage";
import ProfilePage from "./components/ProfilePage";
import Dashboard from "./components/Dashboard"; 
import SignupPage from "./components/SignupPage";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/tasks" element={<TaskList />} />
                <Route path="/add-task" element={<TaskForm />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/signup" element={<SignupPage />} />
            </Routes>
        </Router>
    );
};

export default App;
