import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

export default function Footer(){
  return(
    <div className="footer-container">
      <div className="footer-top-section">
        <div className="project-container">
          <p className="footer-category">Project</p>
          <ul>
            <li>GitHub</li>
            <li><Link className='footer-links' to='/signup'>Register</Link></li>
            <li><Link className='footer-links' to='/login'>Log In</Link></li>
          </ul>
        </div>
        <div className="product-container">
          <p className="footer-category">Product</p>
          <ul>
            <li><Link className='footer-links' to='/features'>Features</Link></li>
          </ul>
        </div>
        <div className="about-us-container">
          <div>
            <p className="footer-category">About Us</p>
            <ul>
              <li>Adam Bradbury</li>
              <li><a className='link-to-portfolio' href='http://www.eddiepo.co' target='_blank'>Eddie Po Yao</a></li>
              <li>Nathan Garrett</li>
              <li><a className='link-to-portfolio' href='https://quang-portfolio.netlify.com/' target='_blank'>Quang Nguyen</a></li>
            </ul>
        </div>
      </div>
    </div>
    <p className="copyright">Copyright 2018</p>
  </div>
  )
}

