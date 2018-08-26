import React from 'react';
import './sidebar.css';
import User from '../../containers/user/user';

const Sidebar = ({ contacts }) => {
  return (
    <aside className="sidebar">
      {console.log(this.props)}
      {contacts.map(contact => <User user={contact} key={contact.user_id} />)}
    </aside>);
}


export default Sidebar;
