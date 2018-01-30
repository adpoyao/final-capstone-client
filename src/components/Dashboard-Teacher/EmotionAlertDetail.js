import React, { Component } from 'react';
import {fetchMoodAlertsByTeacher} from '../../actions/alert';
import {connect} from 'react-redux';
import './EmotionAlertDetail.css';

export class EmotionAlertDetail extends Component {
  
  render() {
    let moods;
    moods = this.props.moodAlerts.map((value, index) => 
        <li key={index} className="mood-alert-li">
          <p>{value.studentID.firstName} {value.studentID.lastName}</p>
          <p>{value.moodType}</p>
          <p>{value.caption}</p>
          <p>{value.dateTime}</p>
        </li>
    )
    return(
      <div className='emotion-alert-detail-container'>
        <h3 className='mood-alert-label'>Mood Alerts</h3>
        <p className='following-students'>The following student(s) submitted a mood update <br/> within 24 hours that requires your attention:</p>
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

