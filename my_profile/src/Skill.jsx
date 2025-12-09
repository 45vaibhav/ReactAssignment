import React from "react";
import style from "./Skill.module.css";

function SkillBox({ title, desc, level ,id , skills,duration}) {
  return (
    <div className={style.box}>
      <h3 className={style.title}>{title}</h3>
      <p className={style.desc}>{desc}</p>
      
      <p className={style.duration}>{duration}</p>
      <h2 className={style.skill_h2}>Skills :</h2>
      {skills.map((val)=>(
        <h4 className={style.skill}>{val}</h4>
      ))}
      
    </div>
  );
}

export default SkillBox;

