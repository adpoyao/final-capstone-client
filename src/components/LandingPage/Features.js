import React, { Component } from 'react';
import {connect} from 'react-redux';
import { toggleView } from '../../actions/views';

import Footer from './Footer';

import './Features.css';

export class Features extends Component {
  componentDidMount() {
    this.props.dispatch(toggleView('features'));
  }

  render() {
    return(
      <div className='features-container'>
        
        <div className='top-section'>
          <img className='features-image-1' src="http://www.comnetwork.org/wp-content/uploads/2015/12/ComNet15-Recap-Journalism-Art-and-Impact-Blending-Journalism-Storytelling-and-the-Arts-to-Engage-Communities-to-Bring-About-Change.jpg" alt='multi colored clouds'/>
          {/* <img src="http://www.stmphotography.ca/uploads/2/6/0/6/26065498/7993691_orig.png" alt="blue and yellow clouds"/> */}
          <h2 className='feature-title'>Features</h2>
        </div>
        
        <div className='features-sub-sections'>
          <div className='feature-1-section feature-detail'>
            <div className='feature-description'>
              <h3 className='feature-number'>Feature 1</h3>
              <p className='feature-small-description'>Description goes here...</p>
            </div>
            <img className='laptop-view' src="http://res.cloudinary.com/adpoyao/image/upload/v1517450719/Mood%20Cloud/macbookgold_front.png" alt='laptop with screen shots' />
          </div>
        </div>

        <div className='features-sub-sections'>
          <div className='feature-2-section feature-detail'>
          <img className='laptop-view' src="http://res.cloudinary.com/adpoyao/image/upload/v1517450719/Mood%20Cloud/macbookgold_front.png" alt='laptop with screen shots' />
          <div className='feature-description'>
              <h3 className='feature-number'>Feature 2</h3>
              <p className='feature-small-description'>Description goes here...</p>
            </div>
          </div>
        </div>
          
        <div className='features-sub-sections'>
          <div className='feature-3-section feature-detail'>
          <div className='feature-description'>
              <h3 className='feature-number'>Feature 3</h3>
              <p className='feature-small-description'>Description goes here...</p>
            </div>
            <img className='laptop-view' src="http://res.cloudinary.com/adpoyao/image/upload/v1517450719/Mood%20Cloud/macbookgold_front.png" alt='laptop with screen shots' />
          </div>
        </div>
        

        <Footer />
      </div>
    )
  }
}

export default connect()(Features);
