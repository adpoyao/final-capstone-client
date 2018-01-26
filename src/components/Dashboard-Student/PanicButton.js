import React, { Component } from 'react';
import * as actions from '../../actions/alert';
import { connect } from 'react-redux';

export class PanicButton extends Component {

  handleToggleOn = (e) => {
    e.preventDefault();
    this.props.dispatch(actions.toggleAlertOn());
  };

  render() {

    return (
      <div>
        <h1>Dr. Quang Master of the Universe, I'm PANICING!!!</h1>
      <button type='submit' class='panic' onClick={(e) => this.handleToggleOn(e)}>HELP me!</button>
      </div>
    );
  }
}

export default connect()(PanicButton)
