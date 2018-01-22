import React, { Component } from 'react';
import {connect} from 'react-redux';
import { toggleView } from '../actions/views';

export class DashboardTeacher extends Component {
  componentDidMount() {
    this.props.dispatch(toggleView('teacher'));
  }

  render() {
    return(
      <h1>Dashboard Teacher</h1>
    )
  }
}

export default connect()(DashboardTeacher);