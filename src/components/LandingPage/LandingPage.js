import React, { Component } from 'react';
import {connect} from 'react-redux';
import { toggleView } from '../../actions/views';
import { Redirect } from 'react-router-dom';


import Footer from './Footer';

import './LandingPage.css';

export class LandingPage extends Component {
  componentDidMount() {
    this.props.dispatch(toggleView('landing-page'));
  }

  render() {

    if (this.props.loggedIn) {
      if(this.props.user.role === 'student'){
      return <Redirect to="/student/dashboard" />;
      } 
      else if(this.props.user.role === 'teacher'){
        return <Redirect to="/teacher/dashboard" />
      }
    }

    return(
      <div className="landing-page-container">
        <div className="landing-page-midsection">
          <div className="landing-page-left">
            <h3 className='main-tagline'>Bring teachers and students closer together with Mood Cloud</h3>
            <p>-Mood Cloud enables teachers to develop their student's EQ or Emotional Intelligence. Students often struggle to 
              to trace their emotion state over time. Mood Cloud helps inform students and communcates to teachers their emotional state.
    track their ups and downs with the ability to reach out anytime during a time of crisis or despair.</p>
          </div>
          <div className="landing-page-right">
            <img src="https://blogsimages.adobe.com/creativecloud/files/2015/06/ColorExplosion_Header-e1435350239810.jpg" alt="rainbow-fart" />
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  user: state.auth.currentUser,
})

export default connect(mapStateToProps)(LandingPage);
