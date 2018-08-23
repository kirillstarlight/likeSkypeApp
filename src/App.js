import { React } from 'react';

import './App.css';
import Sidebar from './components/main';
import Main from './components/main';

const  App = () = {
    return (
      <div className="App">
        <Sidebar/>
        <Main/>
      </div>
    );
}

export default App;
