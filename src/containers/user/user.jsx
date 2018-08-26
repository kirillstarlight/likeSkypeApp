import React from 'react';
import './user.css';

const User = ({ user }) => {
  const { name, profilePic, status } = user;

  return (
    <div className="user">
      {console.log(name)}
      <img src={profilePic} alt={name} className="user__pic" />
      <div className="user__details">
        <p className="user__details-name">{name}</p>
        <p className="user__details-status">{status}</p>
      </div>
    </div>
  );
};
export default User;
