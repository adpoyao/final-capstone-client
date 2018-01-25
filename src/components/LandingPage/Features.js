import React, { Component } from 'react';
import {connect} from 'react-redux';
import { toggleView } from '../../actions/views';

import Footer from './Footer';

export class Features extends Component {
  componentDidMount() {
    this.props.dispatch(toggleView('features'));
  }

  render() {
    return(
      <div>
        <h1>Features</h1>
        <p>Feature 1</p>
        <p>Feature 2</p>
        <p>Feature 3</p>
        <Footer />
      </div>
    )
  }
}

export default connect()(Features);
