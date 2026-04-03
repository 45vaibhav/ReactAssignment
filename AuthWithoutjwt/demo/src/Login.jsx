import React, { useState } from "react";
import axios from "axios";
import "./register.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [loginData, setLoginData] = useState({
    name: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8085/student/login",
        loginData
      );

      if (res.data === "SUCCESS") {
        alert("Login Successful");

        navigate("/dashboard"); // next page
      } else {
        alert("Invalid Credentials");
      }

    } catch (error) {
      alert("Error");
    }
  };

  return (
    <div className="container">
      <h2>Login Page</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={loginData.name}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={loginData.password}
          onChange={handleChange}
        />

        <button type="submit">Login</button>


<p className="login-text">New User?</p>

<button
  type="button"
  className="register-btn"
  onClick={() => navigate("/")}
>
  Register First
</button>
      </form>
    </div>
  );
}

export default Login;