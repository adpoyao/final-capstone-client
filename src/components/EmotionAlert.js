import React, { Component } from 'react';

import EmotionAlertDetail from './EmotionAlertDetail';

export default class EmotionAlert extends Component {
  render() {
    let alert;
    // Condition: if teacher-user has NO student with critical emotions logged within 24hr
    alert = (
      <div className='no-alert-container'>
        <p>There are no student with critical alerts at this time.</p>
      </div>
      )
    // Condition: if teacher-user HAS student(s) with critical emotions logged within 24hr
    alert = (
      <div className='alert-container'>
        <p className='alert'>The following student(s) require your immediate attention:</p>
        
        {/* Mapping happens here */}
        <EmotionAlertDetail />
        <EmotionAlertDetail />
        <EmotionAlertDetail />
      </div>
    )

    return(
      <div className='emotion-alert-container'>
        {alert}
      </div>
    )
  }
}
