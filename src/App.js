import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <h1 style={{ flexDirection: 'row', display: 'flex', color: '#0ABE51', justifyContent: 'center', alignItems: 'center'}}>
        You Are Authenticated
        <a href="https://web.flock.co/?">
          <img 
            style={{ height: '100px'}}
            src="http://www.appsunveiled.com/wp-content/uploads/2015/04/Flock-Logo.png"
          />
        </a>
      </h1>
    );
  }
}

export default App;
