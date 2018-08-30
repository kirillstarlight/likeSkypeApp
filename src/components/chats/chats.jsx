import React, { Component } from 'react';
import './chats.css';

const Chat = ({ message }) => {
  const { text, isUserMsg } = message;
  return (
    <span className={`chat ${isUserMsg ? 'isUserMsg' : ''}`}>{text}</span>
  );
};

class Chats extends Component {
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }
  
  componentDidMount() {
    this.scrollToBottom();
  }
  
  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const { messages } = this.props;
    return (
      <div className="chats">
        {messages.map(message => (
          <Chat message={message} key={message.number} />
        ))}
        <div style={{ float:"left", clear: "both" }}
          ref={(el) => { this.messagesEnd = el; }}>
        </div>
      </div>
    );
  }
}

export default Chats;
