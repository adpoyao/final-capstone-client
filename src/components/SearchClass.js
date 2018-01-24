import React, { Component } from 'react';
import ClassesResult from './ClassesResult';
import { connect } from 'react-redux';
import { searchClasses } from '../actions/classes';

export class SearchClass extends Component {

  handleSearch = (e) => {
    e.preventDefault();
    const value = this.input.value;
    this.props.dispatch(searchClasses(value));
    this.input.value = '';
  }

  render() {

    return(
      <div className='SearchClass'>
        <form onSubmit={e => this.handleSearch(e)}>
          <legend>Find your class</legend>
          <label htmlFor='search-teacher'>Enter your teacher's name</label>
          <input
            type='text'
            name='search-teacher'
            id='search-teacher'
            placeholder='i.e. Billy Boysenberry'
            ref={input => this.input = input}
            />
          <button type='submit'>Search</button>
        </form>
        <ClassesResult />
      </div>
    )
  }
}

export default connect()(SearchClass)
