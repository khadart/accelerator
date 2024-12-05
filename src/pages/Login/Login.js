import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      alert(response.data.message);
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex "style={{backgroundColor:'black!important'}}>
      {/* Left Section */}
      <div className="col-md-6 bg-danger text-white d-flex flex-column align-items-center justify-content-center">
        <h1 className="mb-4">Lorem ipsum dolor sit amet</h1>
        <img
          src="rocket_icon.png"
          alt="Rocket"
          style={{ width: "100px", marginBottom: "20px" }}
        />
        <p className="text-center">
          Euismod arcu cum lobortis et vitae nunc sagittis placerat lorem. Arcu
          commodo ipsum in hac orci.
        </p>
      </div>

      {/* Right Section */}
      <div className="col-md-6 d-flex align-items-center justify-content-center">
        <form onSubmit={handleSubmit} className="w-75">
          <h1 className="text-center mb-4">TMM Accelerator</h1>
          {error && (
            <div className="alert alert-danger text-center">{error}</div>
          )}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="ms-2">
                Remember me
              </label>
            </div>
            <a href="#" className="text-decoration-none">
              Forgot Password?
            </a>
          </div>
          <button type="submit" className="btn btn-danger w-100">
            Sign In
          </button>
          <p className="text-center my-3">OR</p>
          <button type="button" className="btn btn-outline-primary w-100 mb-3">
            Sign In with Office 365
          </button>
          <button type="button" className="btn btn-outline-primary w-100">
            Sign In with Azure
          </button>
          <p className="text-center mt-4">
            Don't have an account yet?{" "}
            <a href="#" className="text-decoration-none">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
