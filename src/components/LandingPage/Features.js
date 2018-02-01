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
              <h3 className='feature-number'>Mood Grid</h3>
              <p className='feature-small-description'>Students record their moods on an interactive mood grid. Moods are laid
     out left to right, representing negative to positive emotions, and top to bottom reflecting
     high to low energy levels.</p>
            </div>
            <img className='laptop-view' src="http://home/adam/Documents/finalCap/final-capstone-client/src/assets/studentsSelectsMood.png" alt='student mood grid' />
          </div>
        </div>

        <div className='features-sub-sections'>
          <div className='feature-2-section feature-detail'>
          <img className='laptop-view' src="http://res.cloudinary.com/adpoyao/image/upload/v1517450719/Mood%20Cloud/macbookgold_front.png" alt='laptop with screen shots' />
          <div className='feature-description'>
              <h3 className='feature-number'>Mood Cloud</h3>
              <p className='feature-small-description'>Submitted moods are displayed for the student in a word cloud with each word's size corresponding
    to how frequently it has been submitted.</p>
            </div>
          </div>
        </div>
          
        <div className='features-sub-sections'>
          <div className='feature-3-section feature-detail'>
          <div className='feature-description'>
              <h3 className='feature-number'>Teacher Dashboard</h3>
              <p className='feature-small-description'>Teachers stay up to date on their students' emotional wellbeing, 
    and may be alerted during times of crisis or despair.</p>
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
