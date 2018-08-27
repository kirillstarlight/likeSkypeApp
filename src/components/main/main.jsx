import React from 'react';
import Empty from '../empty/empty';
import ChatWindow from '../chat-window/chat-window';
import './main.css';

const Main = ({ user, activeUserId }) => {
  const renderMainContent = () => {
    if (!activeUserId) {
      return (<Empty user={user} activeUserId={activeUserId} />);
    }
    return <ChatWindow activeUserId={activeUserId} />;
  };
  return <main className="main">{ renderMainContent() }</main>;
};

export default Main;
