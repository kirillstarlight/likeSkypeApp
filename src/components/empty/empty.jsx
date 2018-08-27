import React from 'react';
import './empty.css';

const Empty = ({ user, activeUserId }) => {
  const { name, profilePic, status } = user;
  const firstName = name.split(' ')[0];

  return (
    <div className="empty">
      <h1 className="empty__first-name">
        Welcome,
        {firstName}
      </h1>
      <img src={profilePic} alt={name} className="empty__profile-pic" />
      <p className="empty__status">
        <b>Status: </b>
        {status}
      </p>
      <button className="empty__btn" type="button">Start a conversation</button>
      <p className="empty__info">
        Search for someone to start chatting with or go to Contacts to see who
        is available
      </p>
    </div>
  );
};

export default Empty;
