import React from 'react';
import './About.css'
import bioPic from "../images/Gregg_Profile_Pic_Blur_Exp.jpg";

const About = () => (
  <div className="about-container">
    <img className="gregg-img" src={bioPic} />
    <p className="about-text">
      Software engineer experienced in developing full-stack applications with
      an emphasis on modularized React/Redux front-end and scalable Node
      back-end
    </p>
  </div>
);

export default About;