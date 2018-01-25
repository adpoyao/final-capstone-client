import React, { Component } from 'react';
import {connect} from 'react-redux';
import { toggleView } from '../../actions/views';

import Footer from './Footer';

import './LandingPage.css';

export class LandingPage extends Component {
  componentDidMount() {
    this.props.dispatch(toggleView('landing-page'));
  }

  render() {
    return(
      <div className="landing-page-container">
        <div className="landing-page-midsection">
          <div className="landing-page-left">
            <h2>Main tagline goes here</h2>
            <p>...smaller captions goes here</p>
          </div>
          <div className="landing-page-right">
            <img src="https://blogsimages.adobe.com/creativecloud/files/2015/06/ColorExplosion_Header-e1435350239810.jpg" />
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default connect()(LandingPage);
