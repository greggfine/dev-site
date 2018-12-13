import React from 'react';
import './Skills.css';
import  { Skill }  from './Skill'


export const Skills = ( {skills}) => {
    return (
		<div>
			<div className="pink-box">
				<div className="skills-container">
					<h2>Skills:</h2>
						<ul className="skill-list">
							<Skill skills={skills} />
						</ul>
						
				</div>
			</div>
		</div>
    )
}