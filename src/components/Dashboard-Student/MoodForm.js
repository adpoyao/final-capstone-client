import React, { Component } from 'react';
import { connect } from 'react-redux';
import  {saveMood} from '../../actions/moods';

import './MoodForm.css';

export class MoodForm extends Component {
  handleSaveMood = (e) => {
    e.preventDefault();
    console.log(this.props.selectedMood);
    console.log(this.props.id)
    console.log('placeholder');
    let mood = {moodType: this.props.selectedMood, studentID: this.props.id}
    this.props.dispatch(saveMood(mood))
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


const mapStateToProps = state => ({
  selectedMood: state.moods.selectedMood,
  id: state.auth.currentUser.id
})

export default connect(mapStateToProps)(MoodForm)