import React, { Component } from 'react';
import {fetchPanicAlertsByTeacher} from '../../actions/alert';
import {connect} from 'react-redux';
import {dismissAlert} from '../../actions/alert';

import './PanicAlertDetail.css';

export class PanicAlertDetail extends Component {
  handleDismiss = (panicID) => {
    let data = {panicID, teacherID: this.props.userId}
    this.props.dispatch(dismissAlert(data))
  }
  render() {
    
    let panics;
    panics = this.props.panicAlerts.map((value, index) => 
      <li key={index} className="panic">
        <p>{value.studentID.firstName} {value.studentID.lastName}</p>
        <p>{value.dateTime}</p>
        <button onClick={() => this.handleDismiss(value._id)}>Dismiss</button>
      </li>
    )
    
    return(
      <div className='panic-alert-detail'>
        <h3>Panic Alerts</h3>
        <p className='following-students'>The following student(s) have an active alert. <br/> Click on student name to begin chat immediately.</p>
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

