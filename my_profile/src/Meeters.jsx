import React from 'react'
import { useLocation } from "react-router-dom";
import style from './Meeters.module.css'
function Meeters() {
    const { state } = useLocation(); 
  return (
    <div className={style.main_cont}>
      <h1 className={style.h1}>Welcome {state.name}....</h1>
        <h1 className={style.h2}>thank you for registering</h1>
      <div className={style.box} >
      <p>Name: <b>{state?.name}</b></p>
      <p>Email:  <b>{state?.email}</b></p>
      <p>contact: <b>{state?.phone}</b></p>
      </div>
    </div>
  );
}
export default Meeters;

   
