import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchClassesByTeacher, deleteClassByTeacher } from '../../actions/classes';

import './ClassDetail-Teacher.css';

export class ClassDetailTeacher extends Component {
  componentDidMount(){
    this.props.dispatch(fetchClassesByTeacher(this.props.userId))
  }

  handleCloseClass = classID => {
    const data = {classID, teacherID: this.props.userId };
    this.props.dispatch(deleteClassByTeacher(data));
  }

  handleEditClass = classID => {
    console.log('Editing ', classID);
  }

  render() {

    if(this.props.createdClasses.length === 0){
      
      if(this.props.loading){
        return(
          <div>
            <p>Loading Classes...</p>
          </div>
        )
      }
      return(
        <div>
          <p>You've not created any classes.</p>
        </div>
      )
    }

    let classList;

    classList = this.props.createdClasses.map((item, index) => 
    <li key={index} className='created-course'>
      <p>Class Name: {item.className}</p>
      <p>Enrolled Students: {item.students.length}</p>
      <button onClick={()=>this.handleEditClass(item._id)}>Edit</button>
      <button onClick={()=>this.handleCloseClass(item._id)}>Remove</button>
    </li>
  );

    return(
      <div className='class-detail-teacher-container'>
        <ul>
          {classList}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.classes.loading,
  userId: state.auth.currentUser ? state.auth.currentUser.id : 0,
  createdClasses: state.classes.createdClasses
})

export default connect(mapStateToProps)(ClassDetailTeacher);