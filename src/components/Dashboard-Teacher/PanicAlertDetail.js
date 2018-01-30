import React, { Component } from 'react';
import {fetchPanicAlertsByTeacher} from '../../actions/alert';
import {connect} from 'react-redux';

import './PanicAlertDetail.css';

export class PanicAlertDetail extends Component {

  componentDidMount() {
    this.props.dispatch(fetchPanicAlertsByTeacher(this.props.userId))
  }
  render() {
    return(
      <div className='panic-alert-detail'>
        <h3>Panic Alerts</h3>
        <p className='following-students'>The following student(s) have an active alert. <br/> Click on student name to begin chat immediately.</p>
        <ul>
          <li>mapping happens here</li>
          <li>mapping happens here</li>
          <li>mapping happens here</li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userId: state.auth.currentUser.id,
  hasCreatedClasses: state.classes.createdClasses,
  loading: state.classes.loading,
})

export default connect(mapStateToProps)(PanicAlertDetail);

