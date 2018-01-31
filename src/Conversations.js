import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendReply } from './actions/conversations'




export class Conversations extends Component {
    onSubmit(e){
      e.preventDefault()
      const text = this.textInput.value
      sendReply(text)
      console.log(text)
    }
  
    render() {
  
      return(
        <div>
        <form onSubmit={e => {this.onSubmit(e)}}>
            <input ref={(input) => {this.textInput = input}}type="text"></input>
            <button action="submit">Send</button>
        </form>
        </div>
      )
    }
  }
  
  const mapStateToProps = state => ({

  })
  
  export default connect()(Conversations);