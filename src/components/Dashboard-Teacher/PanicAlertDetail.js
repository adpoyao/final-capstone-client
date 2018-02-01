import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

import {dismissAlert} from '../../actions/alert';

import './PanicAlertDetail.css';

export class PanicAlertDetail extends Component {
  handleDismiss = (panicID) => {
    let data = {panicID, teacherID: this.props.userId}
    this.props.dispatch(dismissAlert(data))
  }
  render() {
    if(this.props.panicAlerts.length === 0){
      return null;
    }
    
    let panics;
    panics = this.props.panicAlerts.map((value, index) => 
      <li key={index} className="panic-alert-li">
        <div className='divider'></div>
        <p className='panic-alert-li-name'>{value.studentID.firstName} {value.studentID.lastName}</p>
        <Moment className='panic-alert-li-date-time' fromNow>{value.dateTime}</Moment>
        <div className='panic-alert-li-buttons'>
          <button className='panic-alert-li-chat'><Link to='/chatbox'>Chat</Link></button>
          <button className='panic-alert-li-dismiss' onClick={() => this.handleDismiss(value._id)}>Dismiss</button>
        </div>
      </li>
    )
    
    return(
      <div className='panic-alert-detail'>
        <h3>Panic Alerts</h3>
        <p className='following-students'>The following student(s) have an active alert. <br/> Click below to begin chat with student immediately.</p>
        <ul>
          {panics}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userId: state.auth.currentUser.id,
  hasCreatedClasses: state.classes.createdClasses,
  loading: state.classes.loading,
  panicAlerts: state.alert.panicStudents
})

export default connect(mapStateToProps)(PanicAlertDetail);

