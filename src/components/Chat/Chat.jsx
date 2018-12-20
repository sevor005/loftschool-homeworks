import Message from './Message'
import './Chat.css';

class Chat extends React.Component {
  render() {
    return (
      <div>
        <div className="chat">
          <Message />
        </div>
        <input className="input-message"/>
      </div>
    )
  }
}

export default Chat;
