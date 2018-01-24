import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ClassesResult extends Component {
  handleEnrollClass = (classID) => {
    let studentID = this.props.student.id;
    let studentFirstName = this.props.student.firstName
    let studentLastName = this.props.student.lastName;
    const data = {classID, studentID, studentFirstName, studentLastName}
    console.log(data)
  }
  
  render() {
    if (this.props.loading) {
      return <span className="loading">Searching...</span>
    };

    let classList;

    classList = this.props.result.map((item, index) => 
    <li key={index} className='course'>
      <p>Class Name: {item.className}</p>
      <p>Teacher Name: {item.teacherName}</p>
      <button onClick={()=>this.handleEnrollClass(item.classID)}>➕</button>
    </li>
  );


    return(
      <div className='classes-result-container'>
        <ul>
          {classList}
        </ul>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  loading: state.classes.loading,
  result: state.classes.searchedClasses,
  student: state.auth.currentUser
});

export default connect(mapStateToProps)(ClassesResult);