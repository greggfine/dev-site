import React, { Component } from 'react';
import './Projects.css';
import Project from './Project'
import tutorialSearch from "../images/TutorialSearch.jpg";
import musicLibrary from "../images/ht_MusicLibrary.png";
import guitarSite from "../images/guitar-site.png";
import earTrainingGame from "../images/ear-training-game.png";
import charlieHadenTribute from "../images/charlie-haden-tribute-page.png";
import oscillatorPlayer from "../images/oscillator-player.png";
import fourBandEq from "../images/4-band-eq.png";
import dynamicsCompressor from "../images/dynamics-compressor.png";
import simpleSynth from "../images/simple-synth.png";
import cardMockup from "../images/Card_Mockup.png";

export default class Projects extends Component {
	constructor(props){
		super(props)

		this.state={
			projects: [
				{ title: 'Tutorial Search',
				 image:  tutorialSearch 
				},
				{ title: 'Music Library',
					image: { musicLibrary }
				},
				{ title: 'Guitar Website',
					image: { guitarSite }
				},
				{ title: 'Ear Training Game',
					image: { earTrainingGame }
				},
				{ title: 'Charlie Haden Tribute Page',
					image: { charlieHadenTribute }
				},
				{ title: 'Oscillator Player',
					image: { oscillatorPlayer }
				},
				{ title: '4-Band EQ',
					image: { fourBandEq }
				},
				{ title: 'Dynamics Compressor',
					image: { dynamicsCompressor }
				},
				{ title: 'Simple Synth',
					image: { simpleSynth }
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
					src={ cardMockup } style={{ width: '50%', margin: 'auto', display: 'block' }}/>
			</div>
		)
      
	}
}
