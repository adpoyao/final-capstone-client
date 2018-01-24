import React, { Component } from 'react';
import {connect} from 'react-redux';
import { toggleView } from '../../actions/views';

export class LandingPage extends Component {
  componentDidMount() {
    this.props.dispatch(toggleView('landing-page'));
  }

  render() {
    return(
      <h1>LandingPage</h1>
    )
  }
}

export default connect()(LandingPage);
