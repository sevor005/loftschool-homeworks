import React from 'react';
import Message from '../Message';
import './Chat.css';

class Chat extends React.Component {
  state = {
    messageInput: '',
    messages: []
  }

  sendMessageOnEnter = event => {
    if(event.key !== 'Enter') return;
    this.setState({ messages:[...this.state.messages, this.state.messageInput], messageInput: '' })
  }

  changeInputMessage = event => (event.target.value === '') ? null : this.setState({ messageInput: event.target.value })

  render() {
    const {messages, messageInput} = this.state
    return (
      <div>
        <div className="chat">
        { messages.map((message) => (<Message text={ message } />)) }
        </div>
        <input
          className="input-message"
          type="text"
          onKeyPress={ this.sendMessageOnEnter }
          onChange={ this.changeInputMessage }
          value={ messageInput }
        />
      </div>
    )
  }
}

export default Chat;
