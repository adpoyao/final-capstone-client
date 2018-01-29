// import React, { Component } from 'react';
// import {connect} from 'react-redux';
// import MoodForm from '../Dashboard-Student/MoodForm';
// import MoodCaptions from '../Dashboard-Student/MoodCaptions';
// import MoodSelections from '../Dashboard-Student/MoodSelections';
// import WordCloud from 'react-d3-cloud';
// import { fetchStudentMoods } from '../../actions/moods'

// export class MoodCloud extends Component {
//   componentDidMount() {
//     this.props.dispatch(fetchStudentMoods(this.props.studentId))
//     console.log('this.props.studentId', this.props.studentId)

//   }

//   render() {
    
//     // if(this.props.submittedMoods.length === 0){

//     //   if(this.props.loading){
//     //     return(
//     //       <div>
//     //         <p>Loading Moods...</p>
//     //       </div>
//     //     )
//     //   }
//       // return(
//       //   <div>
//       //     <p>You don't have any moods saved.</p>
//       //   </div>
//       // )
//     // }
//     const data = [
//       { text: 'Hey', value: 1000 },
//       { text: 'lol', value: 200 },
//       { text: 'first impression', value: 800 },
//       { text: 'very cool', value: 1000000 },
//       { text: 'duck', value: 10 },
//     ];

//     const fontSizeMapper = word => Math.log2(word.value) * 5;
//     const rotate = word => word.value % 360;
  
//     return(
//       <div className='moodcloud-container'>
//         <h1>MoodCLoud</h1>
//         <p><WordCloud data={data} fontSizeMapper={fontSizeMapper} rotate={rotate} /></p>
//       </div>
//     )
//   }
// }
// const mapStateToProps = state => ({
//   id: state.auth.currentUser.id
// })

// export default connect(mapStateToProps)(MoodCloud)