import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignupPage.css"; // Optional CSS for signup page

const SignupPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match!");
        } else {
            console.log("Sign Up submitted with:", { name, email, password });
            // You can add API logic to send user data to the backend here.
            navigate("/login"); // Redirect to login after successful signup
        }
    };

    return (
        <div className="signup-page-container">
            <div className="signup-box">
                <h2>Create Your Account</h2>
                <p className="signup-subtext">Join us and start managing your tasks effectively.</p>

                {error && <p className="error-message">{error}</p>} {/* Display error message if any */}

                <form onSubmit={handleSubmit} className="signup-form">
                    <div className="input-field">
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

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

                    <div className="input-field">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="signup-btn">
                        Sign Up
                    </button>
                </form>

                <p className="login-link">
                    Already have an account? <a href="/login">Login here</a>.
                </p>
            </div>
        </div>
    );
};

export default SignupPage;
