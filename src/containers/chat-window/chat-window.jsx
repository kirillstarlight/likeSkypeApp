import React from 'react';
import './chat-window.css';
import _ from 'lodash';
import Header from '../../components/header/header';
import Input from '../input/input';
import Chats from '../../components/chats/chats';
import { state } from '../../static-data';

const ChatWindow = ({ activeUserId }) => {
  const activeMsgs = state.messages[activeUserId];
  const { typing } = state;
  return (
    <div className="chat-window">
      <Header user={activeUserId} />
      <Chats messages={_.values(activeMsgs)} />
      <Input value={typing} />
    </div>
  );
};

export default ChatWindow;
