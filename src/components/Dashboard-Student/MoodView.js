import React, { Component } from 'react';
import { connect } from 'react-redux';

import MoodForm from './MoodForm';
import MoodCaptions from './MoodCaptions';
import MoodSelections from './MoodSelections';

import './MoodView.css';

export class MoodDash extends Component {
  render() {
    return(
      <form className="mood-view-container">
        <p className="how-are-you"><span className="user-first-name">{this.props.firstName}</span>, how are you feeling right now?</p>
        <MoodSelections/>
        <MoodCaptions/>
        <MoodForm/>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  firstName: state.auth.currentUser.firstName,
})

export default connect(mapStateToProps)(MoodDash)