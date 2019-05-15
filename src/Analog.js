import './App.css';
import React, { Component } from 'react';
import Clock from 'react-clock';

class Analog extends Component {
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
          secondHandOppositeLength={this.props=15}
          size={this.props=250}
        />
      </div>
    );
  }
}

export default Analog;
