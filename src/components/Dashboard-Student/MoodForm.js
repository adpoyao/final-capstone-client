import React, { Component } from 'react';
import { connect } from 'react-redux';
import  {saveMood} from '../../actions/moods';

import './MoodForm.css';

export class MoodForm extends Component {
  handleSaveMood = (e) => {
    e.preventDefault();
    let mood = {moodType: this.props.selectedMood, studentID: this.props.id, caption: this.textInput.value}
    this.props.dispatch(saveMood(mood))
  }

  render() {
    return(
      <div className='moodform-container'>
        <textarea ref={(input) => { this.textInput = input; }} className="text-area" rows='5' placeholder='I feel this way because: ' defaultValue="I feel this way because: " />
        <button className="save-mood" type='submit' onClick={(e)=>this.handleSaveMood(e)}>Save Mood</button>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  selectedMood: state.moods.selectedMood,
  id: state.auth.currentUser.id
})

export default connect(mapStateToProps)(MoodForm)