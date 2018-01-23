import React, { Component } from 'react';
import { connect } from 'react-redux';

export class AddClass extends Component {

  handleAdd = (e) => {
    e.preventDefault();
    const value = {
      className: this.classNameInput.value,
      email: this.emailContactInput.value
    }
    console.log(value);
    this.classNameInput.value = '';
    this.emailContactInput.value = '';
  }

  render() {
    return(
      <div className='AddClass'>
        <form onSubmit={e => this.handleAdd(e)}>
          <legend>Create a class</legend>
          <label htmlFor='search-teacher'>Class Name</label>
          <input 
            type='text'
            name='class-name'
            id='class-name'
            placeholder='i.e. Computer Science'
            ref={input => this.classNameInput = input}
            />

          <label htmlFor='search-teacher'>Contact Email</label>
          <input 
            type='text'
            name='contact-email'
            id='contact-email'
            placeholder='i.e. bboy@thinkful.com'
            ref={input => this.emailContactInput = input}
            />

          <button type='submit'>Create</button>
        </form>
      </div>
    )
  }
}


export default connect()(AddClass)