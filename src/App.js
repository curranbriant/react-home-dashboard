import './App.css';
import React, { Component } from 'react';
import Analog from '/Users/briancurran/myProjects/react-home-dash/src/Analog.js'
import Time from '/Users/briancurran/myProjects/react-home-dash/src/Time.js'

class App extends Component {

  render() {
    return (
      <div className="Analog">
<Analog/>
<Time />
      </div>
    );
  }
}

export default App;
