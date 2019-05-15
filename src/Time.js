import React, { Component } from 'react';
class Time extends Component {
    state = {
        time: new Date()
    };
  
    componentDidMount() {
      this.timerID = setInterval(() => this.tick(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        time: new Date()
      });
    }

  
  
    render() {
      return (
        <div>
          <h2>It is {this.state.time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}.</h2>
        </div>
      );
    }
  }
  export default Time;