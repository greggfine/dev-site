import React from 'react';
import './About.css'
import bioPic from "../images/Gregg_Profile_Pic_Blur_Exp.jpg";

const About = () => (
  <div className="about-container">
    <img className="gregg-img"
      src= { bioPic }/>
        <p className="about-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nisi consequuntur consectetur fugit eius, minus recusandae temporibus ducimus possimus. Quibusdam a perspiciatis sed harum dolor, tenetur officiis consequuntur ducimus minima?
        </p>
  </div>
);

export default About;