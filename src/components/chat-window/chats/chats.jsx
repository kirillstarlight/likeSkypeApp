import React from 'react';
import './chats.css';

const Chats = ({activeUserId}) => {
  return (
    <div className="chat__chats">
      {activeUserId}
    </div>
  );
};

export default Chats;
