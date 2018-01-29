import React, { Component } from 'react';
import {connect} from 'react-redux';
import MoodForm from '../Dashboard-Student/MoodForm';
import MoodCaptions from '../Dashboard-Student/MoodCaptions';
import MoodSelections from '../Dashboard-Student/MoodSelections';

export class MoodCloud extends Component {
  componentDidMount() {
    console.log(this.props.id);
  }

  render() {
    return(
      <div className='moodcloud-container'>
        <h1>MoodCLoud</h1>
        <p>D3 goes here</p>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  id: state.auth.currentUser.id
})

export default connect(mapStateToProps)(MoodCloud)