import React from 'react'
import style from './About.module.css'
import{ data} from './Data'
import Skill from './Skill'
function About() {
  return (
    
        <div className={style.main_container}>
            <div className={style.sub_container}>
             <div className={style.child_sub_container}>
      
              <div className={style.h1_div}>
              <h1 className={style.h1}>About Me </h1>
              <p className={style.para2}>I build intelegent , user-centric digital experiences by turning complex problem into clean , efficent code .</p>
              </div>
              <div className={style.page_1_btn_div}>
                  <h2 className={style.h2_phlosofy}>My Story & philosofy :</h2>
                  <p className={style.para2}>“My name is Vaibhav. I come from a strong interest in technology and problem-solving. During my academic journey, I worked on multiple projects where I learned how to build clean, functional applications using HTML, CSS, JavaScript, React, and modern web tools. I enjoy converting ideas into real working interfaces and continuously improving my skills. I’m a quick learner, comfortable working in teams, and always excited to take on new challenges. Right now, I’m looking for an opportunity where I can contribute my skills, learn from experienced mentors, and grow professionally.”</p>
              </div>
             </div>
             <div className={style.child_sub_container}>
              <div className={style.profile_photo}>
                  <img  className={style.img}src="https://images.pexels.com/photos/17515211/pexels-photo-17515211.jpeg?_gl=1*18j5olm*_ga*MTE2MTI3NzEzOC4xNzQzNDk4OTM5*_ga_8JE65Q40S6*czE3NjUxMzE5MTQkbzgkZzEkdDE3NjUxMzE5NDgkajI2JGwwJGgw" alt="Profile" height={700} width={550}/>
              </div>
             </div>
      
            </div>
            <h2 className={style.h2}>Technical Skills :</h2>
            <div className={style.skill_div} >
              {
                data.map((val)=>{
                  return(
                   <Skill 
                   id={val.id} title={val.title} desc={val.description}
                   level={val.level} duration={val.duration} skills={val.skills}
                   />
                  )
                })
              }
            </div>
          </div>
    
  )
}

export default About
