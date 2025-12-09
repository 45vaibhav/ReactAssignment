import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import style from './Navbar.module.css'
import icon from './assets/user.png'
function NavBar() {
  const[color ,setColor]=useState("rgba(27, 4, 92, 0.462) ")

  function handleColor(){
    if (color=="rgba(27, 4, 92, 0.462)") {
      setColor("white")
    }else{
      setColor("rgba(27, 4, 92, 0.462");
    }
  }
  return (
    <div className={style.main_div}>
      <div className={style.img_cont} > 
        <img className={style.img} src={icon} alt="" />
      </div>
      <div className={style.sub_cont}>

<div className={style.btn}>

      <Link onClick={handleColor} className={style.tag}to={'/'}>Home</Link>
</div>
      <div className={style.btn}>

      <Link  onClick={handleColor} className={style.tag} to={'/projects'}>Projects</Link>
      </div>
      <div className={style.btn}>

      <Link   onClick={handleColor} className={style.tag} to={'/about'}>About</Link>
      </div>
      <div className={style.btn}>

      <Link   onClick={handleColor} className={style.tag} to={'/contact'}>Contact</Link>
      </div>
      <div className={style.btn}>

      <Link   onClick={handleColor} className={style.tag} to={'/work'}>Work With Me</Link>
      </div>

      </div>


    </div>
  )
}

export default NavBar
