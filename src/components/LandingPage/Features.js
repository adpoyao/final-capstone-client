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
          <h2 className='feature-title'>Key Features</h2>
        </div>
        
        <div className='features-sub-sections'>
          <div className='feature-1-section feature-detail'>
            <div className='feature-description'>
              <h3 className='feature-number'>Mood Grid</h3>
              <p className='feature-small-description'>Students record moods via an interactive mood grid. Moods are laid
     out left to right, representing negative to positive emotions, and top to bottom reflecting
     high to low energy levels. Students voluntarily share moods with teachers, notifying them
      in times of critical need.</p>
            </div>
            <img className='laptop-view' src="" alt='student mood grid' />
          </div>
        </div>

        <div className='features-sub-sections'>
          <div className='feature-2-section feature-detail'>
          <img className='laptop-view' src="" alt='Student Mood Cloud' />
          <div className='feature-description'>
              <h3 className='feature-number'>Mood Cloud</h3>
              <p className='feature-small-description'>Submitted moods are displayed for the student in a word cloud. Each word's size corresponds
    with how often it was submitted. Larger moods more often, smaller moods less often.</p>
            </div>
          </div>
        </div>
          
        <div className='features-sub-sections'>
          <div className='feature-3-section feature-detail'>
          <div className='feature-description'>
              <h3 className='feature-number'>Teacher Dashboard</h3>
              <p className='feature-small-description'> An up-to-date dashboard provides teachers with an an ongoing overview of their students' emotional wellbeing, instantly alerting them when students submit a critical mood.</p>
            </div>
            <img className='laptop-view' src="" alt='Teacher Alert Dashboard' />
          </div>
        </div>
        

        <Footer />
      </div>
    )
  }
}

export default connect()(Features);
