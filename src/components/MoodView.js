import React, { Component } from 'react';
import MoodForm from './MoodForm';
import MoodCaptions from './MoodCaptions';
import MoodSelections from './MoodSelections';

export default class MoodDash extends Component {
  render() {
    return(
      <form>
        <p>*User*, how are you feeling right now?</p>
        <MoodSelections/>
        <MoodCaptions/>
        <MoodForm/>
      </form>
    )
  }
}