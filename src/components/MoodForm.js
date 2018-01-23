import React, { Component } from 'react';

export default class MoodForm extends Component {
  render() {
    return(
      <div className='moodform-container'>
        <textarea rows='5' placeholder='I feel this way because: '>I feel this way because: </textarea>
        <button type='submit' >Save Mood </button>
      </div>
    )
  }
}
