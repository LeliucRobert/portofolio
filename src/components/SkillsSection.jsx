/** @format */

import React from "react";
import "./SkillsSection.css";

const skillsData = [
  { title: "Python", imgSrc: "images/python.svg" },
  { title: "JavaScript", imgSrc: "images/js.png" },
  { title: "React", imgSrc: "images/react.png" },
  { title: "Django", imgSrc: "images/dj.png" },
  { title: "MySQL", imgSrc: "images/Mysql.png" },
  { title: "PostgreSQL", imgSrc: "images/postgre.png" },
  { title: "Git", imgSrc: "images/git.png" },
  { title: "C", imgSrc: "images/C.png" },
  { title: "C++", imgSrc: "images/cpp.png" },
  { title: "HTML5", imgSrc: "images/html.png" },
  { title: "CSS3", imgSrc: "images/css.svg" },
  { title: "Flutter", imgSrc: "images/flutter.png" },
  { title: "Linux", imgSrc: "images/linux.png" },
  { title: "Fast API", imgSrc: "images/fastapi.svg" },
  { title: "Flask", imgSrc: "images/flask.png" },
  { title: "SQLite", imgSrc: "images/sqlite.png" },
];

const SkillsSection = () => {
  return (
    <section id="skills-section">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="skills-section">
        <h2>My Skills</h2>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-card">
              <img
                src={skill.imgSrc}
                alt={skill.title}
                className="skill-image"
              />
              <h3>{skill.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
