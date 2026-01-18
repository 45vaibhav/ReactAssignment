import React from 'react'
import { useState } from "react";
import styles from "./StudentApp.module.css";
export default function StudentApp() {
const [students, setStudents] = useState([]);
const [form, setForm] = useState({ name: "", email: "", course: "" });
const [showStudents, setShowStudents] = useState(false);


const handleChange = (e) => {
setForm({ ...form, [e.target.name]: e.target.value });
};


const registerStudent =async () => {
if (!form.name || !form.email || !form.course) {
alert("All fields are required");
return;
}
setStudents([...students, form]);
setForm({ name: "", email: "", course: "" });
};


const deleteStudent = (index) => {
const updated = students.filter((_, i) => i !== index);
setStudents(updated);
};
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
type="email"
name="email"
placeholder="Email"
value={form.email}
onChange={handleChange}
className={styles.input}
/>
<input
type="text"
name="course"
placeholder="Course"
value={form.course}
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
  onClick={() => setShowStudents(!showStudents)}
  className={styles.getBtn}
>
  {showStudents ? "Hide Students" : "Get All Students"}
</button>

{showStudents && (
students.length === 0 ? (
<p className="subtitle">No students registered</p>
) : (

<table >
<thead >
<tr>
<th >Name</th>
<th >Email</th>
<th >Course</th>
<th >Action</th>
</tr>
</thead>
<tbody>
{students.map((s, index) => (
<tr key={index}>
<td >{s.name}</td>
<td >{s.email}</td>
<td >{s.course}</td>
<td >
<button
onClick={() => deleteStudent(index)}
className="deleteBtn"
>
Delete
</button>
</td>
</tr>

))}
</tbody>
</table>
)
)}
</div>
</div>
  );
}

