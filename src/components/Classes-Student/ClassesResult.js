import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { enrollClass } from '../../actions/classes';

import './ClassesResult.css';

export class ClassesResult extends Component {
  handleEnrollClass = (classID) => {
    let studentID = this.props.student.id;
    const data = {classID, studentID}
    this.props.dispatch(enrollClass(data))
  }
  
  render() {
    if (this.props.loading) {
      return <span className="loading">Searching...</span>
    };

    let classList;

    classList = this.props.result.map((item, index) => 
    <li key={index} className='available-course'>
      <p className='class-name-container'><span className='class-name'>Class Name: </span>{item.className}</p>
      <p><span className='instructor'>Instructor:</span> {item.teacher.firstName} {item.teacher.lastName}</p>
      <button onClick={()=>this.handleEnrollClass(item._id)}>ADD</button>
    </li>
  );


    return(
      <div className='classes-result-container'>
        <ul className='classes-result-ul'>
        <ReactCSSTransitionGroup
          transitionName="collapse"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {classList}
        </ReactCSSTransitionGroup>{classList}
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