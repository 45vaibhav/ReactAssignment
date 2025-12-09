import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import style from './WorkWithMe.module.css';

function WorkWithMe() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleSubmit = (values) => {
    let prev=formData;
    const data=values.name && values.email && values.phone ?
    true :
    false

    if(data==true){
    setFormData(values);
    navigate("/meeters", { state: values });
    console.log(prev);
    }else{
        alert("fill info")
    }
  };

  return (
    <div className={style.main_cont}>
      <h1 className={style.h1}>Register For Connect With Me</h1>

      <Formik
        initialValues={{ name: "", email: "", phone: "" }}
        onSubmit={handleSubmit}
      >
        <Form className={style.form}>
          <Field className={style.field} type='text' name="name" placeholder="Enter name" />
          <Field className={style.field} type='email' name="email" placeholder="Enter email" />
          <Field className={style.field} type='text' name="phone" placeholder="Enter your phone" />

          <button className={style.btn} type="submit">Register You</button>
        </Form>
      </Formik>
    </div>
  );
}

export default WorkWithMe;
