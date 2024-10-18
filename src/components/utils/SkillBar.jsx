/** @format */

import React from "react";
import "./SkillBar.css";

const SkillBar = ({ imgSrc, skillName, percentage, barClass }) => {
  return (
    <div className='skill_bar'>
      <div className='info'>
        <img src={imgSrc} alt={`${skillName} Logo`} className='skill_logo' />
        <p>{skillName}</p>
        <p>{percentage}%</p>
      </div>
      <div className='bar'>
        <span className={barClass} style={{ width: `${percentage}%` }}></span>
      </div>
    </div>
  );
};

export default SkillBar;
