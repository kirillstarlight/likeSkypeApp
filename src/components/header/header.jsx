import React from 'react';
import { state } from '../../static-data';
import './header.css';

const Header = ({ user }) => {
  const activeUser = state.contacts[user];
  return (
    <div className="chat__header">
      <h1 className="chat__header-name">{activeUser.name}</h1>
      <p className="chat__header-status">{activeUser.status}</p>
    </div>
  );
};

export default Header;
