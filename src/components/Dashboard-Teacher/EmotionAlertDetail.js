import React, { Component } from 'react';
import {connect} from 'react-redux';
import Moment from 'react-moment';

import './EmotionAlertDetail.css';

export class EmotionAlertDetail extends Component {
  
  render() {
    if(this.props.moodAlerts.length === 0){
      return null;
    }

    let moods;
    moods = this.props.moodAlerts.map((value, index) => 
        <li key={index} className="mood-alert-li">
          <div className='divider'></div>
          <p className='mood-alert-li-name'>{value.studentID.firstName} {value.studentID.lastName}</p>
          <p className='mood-alert-li-mood'><span className='hash'>#</span>{value.moodType}</p>
          <Moment className='mood-alert-li-date-time' fromNow>{value.dateTime}</Moment>
          {value.caption ? <div className='mood-alert-li-caption'><blockquote className='mood-alert-li-blockquote'>{value.caption}</blockquote></div> : undefined}
          <button className='mood-alert-li-view-history'>View Mood History</button>
        </li>
    )
    return(
      <div className='emotion-alert-detail-container'>
        <h3 className='mood-alert-label'>Mood Alerts</h3>
        <p className='following-students'>The following student(s) submitted a mood update within <br/> the last 24 hours that may require your attention:</p>
        <ul>
          {moods}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userId: state.auth.currentUser.id,
  hasCreatedClasses: state.classes.createdClasses,
  loading: state.classes.loading,
  moodAlerts: state.alert.moodAlertStudents
})

export default connect(mapStateToProps)(EmotionAlertDetail);

