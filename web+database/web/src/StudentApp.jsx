import React from 'react'
import { useState } from "react";
import styles from "./StudentApp.module.css";
import axios from "axios";
export default function StudentApp() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ name: "", age: "" });
  const [showStudents, setShowStudents] = useState(false);


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ADD STUDENT 
  const registerStudent = async () => {
    if (!form.name || !form.age) {
      alert("All fields are required");
      return;
    }
    var response = await axios.post("http://localhost:8080/students/addstudent", form);
    setStudents(students=>[...students, response.data]);
    setForm({ name: "", age: "" });
    alert("student added succwsfully")
  };

  // DELETE STUDENT
  const deleteStudent = async(id) => {
      console.log("Deleting student with id:", id);
    await axios.delete(`http://localhost:8080/students/deletestudent/${id}`);
    const updated = students=>students.filter(s=>s.id !==id);
    setStudents(updated);
  
  };

  //GET ALL STUDENT

  const getAllStudents = async ()=>{
    const response= await axios.get("http://localhost:8080/students/getallstudents");
    setStudents(response.data);
    console.log(students);
  }
  return (
    <div className="page">
      <div className="formCard">
        <h1 className="title">Student Registration</h1>


        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={form.name}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="number"
          name="age"
          placeholder="age"
          value={form.age}
          onChange={handleChange}
          className={styles.input}
        />



        <button
          onClick={registerStudent}
          className="registerBtn"
        >
          Register Student
        </button>
      </div>


      <div className="formCard">
        <h2 className="title">All Students</h2>
        <button
          onClick={() => getAllStudents() }
          className={styles.getBtn}
        >
          {showStudents ? "Hide Students" : "Get All Students"}
        </button>

        {
          students.length === 0 ? (
            <p className="subtitle">No students registered</p>
          ) : (

            <table >
              <thead >
                <tr>
                  <th >Name</th>
                  <th >age</th>
                  <th >Action</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s, index) => (
                  <tr key={index}>
                    <td >{s.name}</td>
                    <td >{s.age}</td>

                    <td >
                      <button
                        onClick={() => deleteStudent(s.id)}
                        className="deleteBtn"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>

                ))}
              </tbody>
            </table>
          
        )}
      </div>
    </div>
  );
}

