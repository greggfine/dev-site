import React from 'react';
import "./Skills.css";

export const Skill = ( {skills}) => {
    return (
        skills.map(skill => {
            return <li id="skill">{skill}</li>
        })
    )
}