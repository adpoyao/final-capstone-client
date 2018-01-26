import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchClassesByStudent } from '../../actions/classes';

import './ClassDetail-Student.css';

export class ClassDetailStudent extends Component {
  componentDidMount(){
    this.props.dispatch(fetchClassesByStudent(this.props.userId))
  }
  
  handleRemoveClass = classID => {
    console.log('Removing ', classID);
  }

  render() {

    
    if(this.props.enrolledClasses.length === 0){
      
      if(this.props.loading){
        return(
          <div>
            <p>Loading Classes...</p>
          </div>
        )
      }  
      return(
        <div>
          <p>You're not enrolled in any classes.</p>
        </div>
      )
    }

    let classList;

    classList = this.props.enrolledClasses.map((item, index) => 
    <li key={index} className='enrolled-course'>
      <p className="enrolled-class-list">Class Name: {item.className}</p>
      <p className="enrolled-class-list">Instructor: {item.teacher.firstName} {item.teacher.lastName}</p>
      <button className="delete-enrolled-button" onClick={()=>this.handleRemoveClass(item._id)}>Remove Class</button>
    </li>
  );

    return(
      <div className='class-detail-student-container'>
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
  enrolledClasses: state.classes.enrolledClasses,
})

export default connect(mapStateToProps)(ClassDetailStudent);