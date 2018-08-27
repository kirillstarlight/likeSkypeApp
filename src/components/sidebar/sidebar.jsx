import React from 'react';
import './sidebar.css';
import User from '../../containers/user/user';

const Sidebar = ({ contacts }) => (
  <aside className="sidebar">
    {console.log(this.props)}
    {contacts.map(contact => <User user={contact} key={contact.userId} />)}
  </aside>
);


export default Sidebar;
