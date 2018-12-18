import React, { Component } from 'react';

const Project = ({project}) => {
		return (
			<li id="project-item" style={{listStyleType: 'none'}}>
				<h2>{project.title}</h2>
				<img style={{width: '50%'}} src={project.image} />

			</li>
		);
}

export default Project;
