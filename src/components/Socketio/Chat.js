import React, { Component } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';

import * as types from './socketTypes';
import * as actions from '../../actions';

class Chat extends Component {
  constructor(props){
    super(props)

    this.socket = io('localhost:8080');

    this.socket.on(types.RECEIVE_MESSAGE, function(data){
      addMessage(data);
    });

    const addMessage = data => {
      this.props.dispatch(actions.setMessages(data));
    }
  }

  handleMessage = (e) => {
    e.preventDefault();
    this.socket.emit(types.SEND_MESSAGE, {
      author: 'test-user',
      message: this.textInput.value,
    });
    this.props.dispatch(actions.setUserMessage(this.textInput.value));
    this.textInput.value = '';
  }

  handleClearHistory = (e) => {
    e.preventDefault();
    this.props.dispatch(actions.clearhistory());
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <div   className="col-4">
            <div className="card">
              
              <div className="card-body">
                <div className="card-title">Chat Box</div>
                <hr/>
                <div className="messages">
                  {this.props.messages.map(message => {
                    return (
                      <div>{message.author}: {message.message}</div>
                    )
                  })}
                </div>
              </div>

              <div className="card-footer">
                <input type="text" placeholder="Message" className="form-control" ref={(input) => { this.textInput = input; }}/>
                <br/>
                <button onClick={(e)=>this.handleMessage(e)} className="btn btn-primary form-control">Send</button>
                <button onClick={(e)=>this.handleClearHistory(e)} className="btn btn-primary form-control">Clear History</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.currentUser,
  messages: state.socketio.messages
})

export default connect(mapStateToProps)(Chat);