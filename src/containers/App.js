import React, { Component } from 'react';

import './App.css';
import _ from 'lodash';
import Sidebar from '../components/sidebar/sidebar';
import Main from '../components/main/main';
import store from '../store/store';

class App extends Component {
  render() {
    const { contacts, user, activeUserId } = store.getState();
    return (
      <div className="App">
        {console.log(contacts)}
        <Sidebar contacts={_.values(contacts)} />
        <Main user={user} activeUserId={activeUserId} />
      </div>
    );
  }
}

export default App;
