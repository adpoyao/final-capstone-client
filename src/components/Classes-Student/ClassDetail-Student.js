import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchClassesByStudent } from '../../actions/classes';
// import { fetchProtectedData } from '../../actions/protected-data';

export class ClassDetailStudent extends Component {
  componentDidMount(){
    // this.props.dispatch(fetchProtectedData());
    // TODO: Solve timing issue
    console.log('Component DID mount', this.props.currentUser);
    // this.props.dispatch(fetchClassesByStudent(this.props.currentUser.id))
  }
  
  handleRemoveClass = classID => {
    console.log('Removing ', classID);
  }

  render() {

    if(this.props.loading){
      return(
        <div>
          <p>Loading Classes...</p>
        </div>
      )
    }

    if(this.props.enrolledClasses.length === 0){
      return(
        <div>
          <p>You're not enrolled in any classes.</p>
        </div>
      )
    }

    let classList;

    classList = this.props.enrolledClasses.map((item, index) => 
    <li key={index} className='enrolled-course'>
      <p>Class Name: {item.className}</p>
      <p>Teacher Name: {item.teacher.firstName} {item.teacher.lastName}</p>
      <button onClick={()=>this.handleRemoveClass(item._id)}>Remove Class</button>
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
  currentUser: state.auth.currentUser,
  enrolledClasses: state.classes.enrolledClasses,
})

export default connect(mapStateToProps)(ClassDetailStudent);