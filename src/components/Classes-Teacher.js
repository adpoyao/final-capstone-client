import React, { Component } from 'react';

import AddClass from './AddClass';
import ClassDetailTeacher from './ClassDetail-Teacher';

export default class ClassesTeacher extends Component {
  render() {
    let createdClasses;
    // Condition: if teacher-user has class created
    // Mapping happens here
    createdClasses = (
    <div className='created-classes-container'>
      <h3>Current Term</h3>
      <ClassDetailTeacher/>
      <ClassDetailTeacher/>
      <ClassDetailTeacher/>
    </div>
    )

    return(
      <div className='classes-teacher-container'>
        {createdClasses}
        <AddClass />
      </div>
    )
  }
}