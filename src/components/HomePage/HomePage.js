import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';

class HomePage extends Component {

 
  

  render() {
    return (
      <div className="homePage">
          <MovieItem/>
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(HomePage);
