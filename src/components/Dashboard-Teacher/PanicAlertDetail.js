import React, { Component } from 'react';

import './PanicAlertDetail.css';

export default class PanicAlertDetail extends Component {
  render() {
    return(
      <div className='panic-alert-detail'>
        <h3>Panic Alerts</h3>
        <p>The following student(s) have an active alert. Click on student name to begin chat immediately.</p>
        <ul>
          <li>mapping happens here</li>
          <li>mapping happens here</li>
          <li>mapping happens here</li>
        </ul>
      </div>
    )
  }
}
