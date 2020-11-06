import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

class HomePage extends Component {


  render() {
    return (
      <div className="App">
        <h1>Home Goes HERE</h1>
        <button>Details</button>
      </div>
    );
  }
}

export default HomePage;
