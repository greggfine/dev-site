import React, { Component } from 'react';
import './Projects.css';
import { Project } from './Project'

export default class Projects extends Component {
	constructor(props){
		super(props)

		this.state={
			projects: [
				{ title: 'Tutorial Search',
				 image: 'images/TutorialSearch.jpg'
				},
				{ title: 'Music Library',
				 image: 'images/ht_MusicLibrary.png'
				},
				{ title: 'Guitar Website',
				 image: 'images/guitar-site.png'
				},
				{ title: 'Ear Training Game',
				 image: 'images/ear-training-game.png'
				},
				{ title: 'Charlie Haden Tribute Page',
				 image: 'images/charlie-haden-tribute-page.png'
				},
				{ title: 'Oscillator Player',
				 image: 'images/oscillator-player.png'
				},
				{ title: '4-Band EQ',
				 image: 'images/4-band-eq.png'
				},
				{ title: 'Dynamics Compressor',
				 image: 'images/dynamics-compressor.png'
				},
				{ title: 'Simple Synth',
				 image: 'images/simple-synth.png'
				},
			]
		}
	}
	render() {
		const {projects} = this.state;
		const mappedProjects = projects.map(project => {
			return <Project project={project}/>
		})
		return (
			<div className="projects-container">
				<img className="project-cards"
					src="/images/Card_Mockup.png" style={{ width: '50%', margin: 'auto', display: 'block' }}/>
			</div>
		)
      
	}
}
