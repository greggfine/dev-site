import React from 'react';
import "./Skills.css";

const Skill = ( {skills}) => {
    return (
        skills.map(skill => {
            return <li id="skill">{skill}</li>
        })
    )
}

export default Skill;