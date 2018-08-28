import React from 'react';
import './user.css';
import { setActiveUserId } from '../../actions';
import store from '../../store/store';

function handleUserClick({ userId }) {
  console.log(userId);
  store.dispatch(setActiveUserId(userId));
}

const User = ({ user }) => {
  const { name, profilePic, status } = user;

  return (
    <div className="user" onClick={handleUserClick.bind(null, user)} role="button" tabIndex="0">
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
