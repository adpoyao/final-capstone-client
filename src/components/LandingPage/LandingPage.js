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
            <h2>Main tagline goes here</h2>
            <p>...smaller captions goes here</p>
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
