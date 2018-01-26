import React, { Component } from 'react';
import { connect } from 'react-redux';
import MoodForm from '../Dashboard-Student/MoodForm';
import MoodCaptions from '../Dashboard-Student/MoodCaptions';
import MoodSelections from '../Dashboard-Student/MoodSelections';
import { fetchStudentMoods } from '../../actions/moods'

export class MoodCloud extends Component {
  componentDidMount() {
    this.props.dispatch(fetchStudentMoods(this.props.studentId))
    console.log('this.props.studentId', this.props.studentId)

  }
 

  render() {
    
    // if(this.props.submittedMoods.length === 0){

    //   if(this.props.loading){
    //     return(
    //       <div>
    //         <p>Loading Moods...</p>
    //       </div>
    //     )
    //   }
      // return(
      //   <div>
      //     <p>You don't have any moods saved.</p>
      //   </div>
      // )
    // }


    return(
      <div className='moodcloud-container'>
        <h1>MoodCLoud</h1>
        <p>D3 goes here</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  studentId: state.auth.currentUser.id,
  submittedMoods: state.moods.studentMoods,
  loading: state.moods.loading
})
export default connect(mapStateToProps)(MoodCloud)