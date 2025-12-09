import React from "react";
import style from './ProjectComp.module.css'

function ProjectComp({ title, description, tech, link }) {
  return (
    <div className={style.card}>
      <h2 className={style.title}>{title}</h2>
      <p className={style.desc}>{description}</p>

      <div className={style.techList}>
        {tech.map((val) => (
          <span className={style.techTagval}>{val}</span>
        ))}
      </div>

      <a href={link}  className={style.btn}>
        View Project
      </a>
    </div>
  );
}

export default ProjectComp;
