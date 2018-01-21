import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import { toggleView } from '../actions/views';

export class Nav extends Component {

  handleChangeView = (selectedView) => {

  }
  
  render() {
    return(
      <h1>Nav</h1>
    )
  }
}

const mapStateToProps = state => ({
  currentView: state.view.selectedView
})

export default connect(mapStateToProps)(Nav)