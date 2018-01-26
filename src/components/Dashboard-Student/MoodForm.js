import React, { Component } from 'react';

import './MoodForm.css';

export default class MoodForm extends Component {
  handleSaveMood = (e) => {
    e.preventDefault();
    // Set a conditional case for empty entry
    // Dispatch to save new Mood
    // Link to Mood Cloud Page
    console.log('placeholder');
  }

  render() {
    return(
      <div className='moodform-container'>
        <textarea className="text-area" rows='5' placeholder='I feel this way because: ' defaultValue="I feel this way because: " />
        <button className="save-mood" type='submit' onClick={(e)=>this.handleSaveMood(e)}>Save Mood</button>
      </div>
    )
  }
}
