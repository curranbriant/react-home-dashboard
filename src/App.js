import './App.css';
import React, { Component } from 'react';
import Clock from 'react-clock';

class App extends Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    setInterval(
      () => this.setState({ date: new Date() }),
      1000
    );
  }

  render() {
    return (
      <div className="Analog">
        <Clock
          value={this.state.date} 
          renderMinuteMarks={this.props=false}
          renderHourMarks={this.props=false}
        />
      </div>
    );
  }
}

export default App;
