import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import HomePage from '../HomePage/HomePage'
import DetailsPage from '../DetailsPage/DetailsPage'
import { connect } from 'react-redux';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Hello!</h1>
        <Router>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/DetailsPage" component={DetailsPage}/>
        </Router>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState 
});
export default connect(putReduxStateOnProps)(App);
