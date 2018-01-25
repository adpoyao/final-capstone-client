import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MoodCaptions.css';

export class MoodCaptions extends Component {
  render() {

    let caption;

    if(!this.props.selectedMood){
      caption =   <p className='mood-caption'>How You Feeling?</p>
    }
    else {
      caption =  <p className='mood-caption'>{this.props.selectedMood}</p>
    }

    return(
      <div className='mood-captions-container'>
        {caption}
      </div>
    )
  }
}


const mapStateToProps = state => ({
  selectedMood: state.moods.selectedMood
})

export default connect(mapStateToProps)(MoodCaptions)
