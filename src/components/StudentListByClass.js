import React, { Component } from 'react';
import StudentListDetail from './StudentListDetail';

export default class StudentListByClass extends Component {
  render() {
    
    // Mapping happens here: Group by Class, then list all students under that class
    let result;
    result = (
      <div className='result-container'>
        <StudentListDetail/>
        <StudentListDetail/>
        <StudentListDetail/>
      </div>
    )

    return(
      <div className='student-list-by-class-container'>
        {result}
      </div>
    )
  }
}
