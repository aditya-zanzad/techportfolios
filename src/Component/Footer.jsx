// Footer.js

import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import '../Styles/Footer.scss'; // Import your footer styles here

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>AZ Developers</h3>
          <p>Solution to all your problems</p>
        </div>
        <div className="footer-right">
          <ul className="social-icons">
            <li><a href="https://github.com"><AiFillGithub /></a></li>
            <li><a href="https://twitter.com"><AiFillTwitterCircle /></a></li>
            <li><a href="https://linkedin.com"><AiFillLinkedin /></a></li>
          </ul>
          <p>Contact: contact@azdevelopers.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 AZ Developers. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
