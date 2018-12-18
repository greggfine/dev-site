import React from 'react';
import './Skills.css';
import Skill from './Skill'


const Skills = ( {skills}) => {
    return (
		<div>
			<div className="pink-box">
				<div className="skills-container">
					<h1>Technical Skills:</h1>
						<ul className="skill-list">
							<Skill skills={skills} />
						</ul>
						
				</div>
			</div>
		</div>
    )
}

export default Skills;