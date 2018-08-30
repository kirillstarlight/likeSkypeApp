import React from 'react';
import './chat-window.css';
import _ from 'lodash';
import Header from '../../components/header/header';
import Input from '../input/input';
import Chats from '../../components/chats/chats';
import store from '../../store/store';

const ChatWindow = ({ activeUserId }) => {
  const activeMsgs = store.getState().messages[activeUserId];
  console.log(`messages that store in state: ${_.values(activeMsgs)}`);

  return (
    <div className="chat-window">
      <Header user={activeUserId} />
      <Chats messages={_.values(activeMsgs)} />
      <Input />
    </div>
  );
};

export default ChatWindow;
