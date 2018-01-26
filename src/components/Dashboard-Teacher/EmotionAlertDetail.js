import React, { Component } from 'react';

import './EmotionAlertDetail.css';

export default class EmotionAlertDetail extends Component {
  render() {
    return(
      <div className='emotion-alert-detail-container'>
        <h3 className='mood-alert-label'>Mood Alerts</h3>
        <p>The following student(s) submitted a mood update within 24hrs that requires your attention:</p>
        <ul>
          <li>mapping happens here</li>
          <li>mapping happens here</li>
          <li>mapping happens here</li>
        </ul>
      </div>
    )
  }
}
