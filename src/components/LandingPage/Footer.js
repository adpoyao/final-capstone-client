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
            <li><a className='link-to-github-client' href='https://github.com/adpoyao/final-capstone-client' target='_blank' rel="noopener noreferrer">GitHub Client</a></li>
            <li><a className='link-to-github-server' href='https://github.com/adpoyao/final-capstone-server' target='_blank' rel="noopener noreferrer">GitHub Server</a></li>
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
              <li><a className='link-to-portfolio' href='http://www.eddiepo.co' target='_blank' rel="noopener noreferrer">Eddie Po Yao</a></li>
              <li><a className='link-to-portfolio' href='http://www.nathanpaulgarrett.com/' target='_blank' rel="noopener noreferrer">Nathan Garrett</a></li>
              <li><a className='link-to-portfolio' href='https://quang-portfolio.netlify.com/' target='_blank' rel="noopener noreferrer">Quang Nguyen</a></li>
            </ul>
        </div>
      </div>
    </div>
    <p className="copyright">Copyright 2018</p>
  </div>
  )
}
