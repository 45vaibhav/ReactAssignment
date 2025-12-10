import React from "react";
import { projects } from "./projectdata";
import ProjectCard from "./ProjectComp";
import style from "./Project.module.css";
import ProjectComp from "./ProjectComp";

function Project() {
  return (
    <div className={style.main_container}>
      <h1 className={style.h1}>My Projects</h1>

      <div className={style.div}>
        {projects.map((p) => (
          <ProjectComp
            key={p.id}
            title={p.title}
            description={p.description}
            tech={p.tech}
            link={p.link}
            github={p.github}
          />
        ))}
      </div>
      
<div className={style.learn_div}>
  <h1 className={style.learn_h1} >What I learned from projects</h1>

  <p className={style.learn_para}>
    Through these projects I gained practical experience in designing responsive UIs,
    integrating third-party APIs, handling state and data flow, building RESTful backends,
    and deploying full-stack applications. I focused on writing clean, maintainable code,
    following component-based architecture, and improving performance and accessibility.
    These experiences sharpened my problem-solving, testing and collaboration skills —
    making me more confident to build real-world applications.
  </p>
</div>



    </div>
  );
}

export default Project;



