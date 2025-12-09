import React from 'react'
import style from './Contact.module.css'
function Contact() {
  return (
       <div className={style.contactContainer}>
      <h1 className={style.contact_h1}>Contact Me</h1>

     

      <div className={style.contactBox}>

        <div className={style.contactItem}>
          <h3>Email</h3>
          <p>vaibhavkapde445@gmail.com</p>
        </div>

        <div className={style.contactItem}>
          <h3>Phone</h3>
          <p>+91 7498146954</p>
        </div>

        <div className={style.contactItem}>
          <h3>LinkedIn</h3>
          <a href="https://www.linkedin.com/in/vaibhav-kapde/" target="_blank">https://www.linkedin.com/in/vaibhav-kapde</a>
        </div>

        <div className={style.contactItem}>
          <h3>GitHub</h3>
          <a href="https://github.com/45vaibhav" target="_blank">github.com/45vaibhav</a>
        </div>

      </div>
    </div>
  )
}

export default Contact
