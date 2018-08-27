import React, { Component } from 'react';

import './App.css';
import Sidebar from '../components/sidebar/sidebar';
import Main from '../components/main/main';
import store from '../store/store';
import _ from 'lodash';

class App extends Component {
  render() {
    const { contacts, user, activeUserId  } = store.getState();
    return (
      <div className="App">
        {console.log(contacts)}
        <Sidebar contacts={_.values(contacts)} />
        <Main user={user} activeUserId={activeUserId}/>
      </div>
    );
  }
}

export default App;
