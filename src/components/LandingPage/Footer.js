import React from 'react';

import './Footer.css';

export default function Footer(){
  return(
    <div className="footer-container">
      <div className="footer-top-section">
        <div className="project-container">
          <p className="footer-category">Project</p>
          <ul>
            <li>GitHub</li>
            <li>Register</li>
            <li>Log In</li>
          </ul>
        </div>
        <div className="product-container">
          <p className="footer-category">Product</p>
          <ul>
            <li>Mission &amp; Values</li>
            <li>Features</li>
          </ul>
        </div>
        <div className="about-us-container">
          <div>
            <p className="footer-category">About Us</p>
            <ul>
              <li>Adam Bradbury</li>
              <li>Eddie Po Yao</li>
              <li>Nathan Garrett</li>
              <li>Quang Nguyen</li>
            </ul>
        </div>
      </div>
    </div>
    <p className="copyright">Copyright 2018</p>
  </div>
  )
}

