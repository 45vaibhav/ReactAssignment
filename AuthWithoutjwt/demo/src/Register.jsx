import React, { useState } from "react";
import axios from "axios";
import "./register.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    password: ""
  });

  const navigate = useNavigate(); // ✅ CORRECT PLACE

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:8085/student/savestudent",
        formData
      );

      alert("Registered Successfully");

      navigate("/login"); // ✅ redirect after register

    } catch (error) {
      alert("Error");
    }
  };

  return (
    <div className="container">
      <h2>Register Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Set Password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit" onClick={()=> navigate("/dashboard")}>Register</button>

        <p className="login-text">Already Registered?</p>

        <button
          type="button"
          className="login-btn"
          onClick={() => navigate("/login")} // ✅ FIXED
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Register;