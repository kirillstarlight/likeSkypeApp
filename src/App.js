import React, { Component } from 'react';

import './App.css';
import Sidebar from './components/sidebar/sidebar';
import Main from './components/main/main';

class App extends Component{
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default App;
