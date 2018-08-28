import React from 'react';
import './chat-window.css';
import Header from './header/header';
import Chats from './chats/chats';
import Input from './input/input';

const ChatWindow = ({ activeUserId }) => (
  <div className="chat-window">
    Conversation with user id:
    <Header activeUserId={activeUserId} />
    <Chats activeUserId={activeUserId} />
    <Input />
  </div>
);

export default ChatWindow;
