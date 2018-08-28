import React from 'react';
import './chats.css';

const Chat = ({ message }) => {
  const { text, isUserMsg } = message;
  return (
    <span className={`chat ${isUserMsg ? 'isUserMsg' : ''}`}>{text}</span>
  );
};

const Chats = ({ messages }) => {
  const currentMessages = messages;
  return (
    <div className="chats">
      {currentMessages.map(message => (
        <Chat message={message} key={message.number} />
      ))}
    </div>
  );
};

export default Chats;
