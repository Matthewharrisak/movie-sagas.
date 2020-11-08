import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import HomePage from '../HomePage/HomePage'
import DetailsPage from '../DetailsPage/DetailsPage'
import { connect } from 'react-redux';
import AddMovies from '../AddMovies/AddMovies';
import Header from '../Header/Header';

class App extends Component {
  // Renders the entire app on the DOM

  

  render() {
    return (
      <div className="App">

        <Router>
          <Header/>
          {/* <Route path ="/" component={App}/> */}
          <Route exact path="/" component={HomePage}/>
          <Route  path="/DetailsPage" component={DetailsPage}/>
          <Route  path='/AddMovies' component={AddMovies}/>

        </Router>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState 
});
export default connect(putReduxStateOnProps)(App);
