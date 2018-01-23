import React, { Component } from 'react';



export default class AddClass extends Component {
  render() {
    return(
      <div className='AddClass'>
        <form>
          <legend>Create a class</legend>
          <label htmlFor='search-teacher'>Class Name</label>
          <input 
            type='text'
            name='class-name'
            id='class-name'
            placeholder='i.e. Computer Science'/>

          <label htmlFor='search-teacher'>Contact Email</label>
          <input 
            type='text'
            name='contact-email'
            id='contact-email'
            placeholder='i.e. bboy@thinkful.com'/>

          <button type='submit'>Create</button>
        </form>
      </div>
    )
  }
}