import React, { Component } from 'react';
import ClassesResult from './ClassesResult';

export default class SearchClass extends Component {
  render() {
    return(
      <div className='SearchClass'>
        <form>
          <legend>Find your class</legend>
          <label htmlFor='search-teacher'>Enter your teacher's name</label>
          <input 
            type='text'
            name='search-teacher'
            id='search-teacher'
            placeholder='i.e. Billy Boysenberry'/>
          <button type='submit'>Search</button>
        </form>
        <ClassesResult />
      </div>
    )
  }
}