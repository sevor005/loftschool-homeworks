import React from 'react';
import './Message.css';

export default class Message extends React.Component {
  render() {
    return this.props.text &&
      <div className="message-list"><span className="message"> {this.props.text} </span></div>
  }
}
