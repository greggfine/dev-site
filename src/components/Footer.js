import React from 'react';
import './Footer.css';

const Footer = () => (
  <div className="footer">
    <h1 className="footer-name">Gregg Fine</h1>
    <p className="footer-email">bbeez8500@gmail.com</p>
    <ul className="footer-links">
      <li>
        <a href="https://twitter.com/GreggFine" target="_blank">
            <i className="fa fa-twitter"></i>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/greggfine/" target="_blank">
          <i className="fa fa-linkedin"></i>
        </a>
      </li>
      <li>
        <a href="https://github.com/greggfine" target="_blank">
          <i className="fa fa-github"></i>
        </a>
      </li>
    </ul>
  </div>
);

export default Footer;