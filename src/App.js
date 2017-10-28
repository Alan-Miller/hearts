import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="sidebar">
        </div>
        <div className="table">
          <div className="player one computer"></div>
          <div className="player two computer"></div>
          <div className="player three computer"></div>
          <div className="player four human"></div>
        </div>
      </div>
    );
  }
}

export default App;
