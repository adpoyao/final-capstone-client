import React, { Component } from 'react';
import {connect} from 'react-redux';
import WordCloud from 'react-d3-cloud';

import { fetchStudentMoods } from '../../actions/moods';

export class MoodCloud extends Component {
  componentDidMount() {
    this.props.dispatch(fetchStudentMoods(this.props.id));
  }

  render() {

    // // DUMMY DATA
    // const data = [
    //   { text: 'at-east', value: 10},
    //   { text: 'shocked', value: 10 },
    //   { text: 'exhilerated', value: 50 },
    //   // { text: 'very cool', value: 1000000 },
    //   // { text: 'duck', value: 10 },
    // ];

    let wordCloud;
    if(this.props.moodCloudData.length > 0){
      wordCloud = <WordCloud data={this.props.moodCloudData} fontSizeMapper={fontSizeMapper} rotate={rotate} />
    }

    const fontSizeMapper = word => Math.log2(word.value) * 5;
    const rotate = word => word.value % 360;

    return(
      <div className='moodcloud-container'>
        <h1>MoodCloud</h1>
        {wordCloud}
        {/* <WordCloud data={data} fontSizeMapper={fontSizeMapper} rotate={rotate} /> */}
      </div>
    )
  }
}
const mapStateToProps = state => ({
  id: state.auth.currentUser.id,
  moodCloudData: state.moods.studentMoods
})

export default connect(mapStateToProps)(MoodCloud)