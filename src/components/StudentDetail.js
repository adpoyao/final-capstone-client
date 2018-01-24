import React, { Component } from 'react';
import MoodReport from './MoodReport';
import EmotionsList from './EmotionsList';

export default class StudentDetail extends Component {
  render() {
    return(
      <div className='student-detail-container'>
        <h1>*Student Name* Detail</h1>
        <MoodReport />
        <EmotionsList />
      </div>
    )
  }
}
