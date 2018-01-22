import React, { Component } from 'react';
import {connect} from 'react-redux';
import { toggleView } from '../actions/views';

export class DashboardStudent extends Component {
  componentDidMount() {
    this.props.dispatch(toggleView('student'));
  }

  render() {
    return(
      <h1>Dashboard Student</h1>
    )
  }
}

export default connect()(DashboardStudent);