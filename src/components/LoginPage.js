import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For redirection
import "./LoginPage.css";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); // Navigation function

    // Mock credentials (in real cases, this would be handled by a backend)
    const mockUser = {
        email: "user@example.com",
        password: "password123",
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === mockUser.email && password === mockUser.password) {
            console.log("Login successful");
            navigate("/dashboard"); // Redirect to dashboard if login is correct
        } else {
            setError("Invalid email or password"); // Display error message
        }
    };

    return (
        <div className="login-page-container">
            <div className="login-box">
                <h2>Login to Your Account</h2>
                <p className="login-subtext">Access your dashboard and manage your tasks seamlessly.</p>

                {error && <p className="error-message">{error}</p>} {/* Display error message */}

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="input-field">
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-field">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="login-btn">
                        Login
                    </button>
                </form>
                <div className="forgot-password">
                    <a href="/">Forgot Password?</a>
                </div>

                <p className="signup-link">
                    Don’t have an account? <a href="/signup">Sign up here</a>.
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
