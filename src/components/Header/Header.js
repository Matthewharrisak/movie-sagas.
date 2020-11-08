import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

class Header extends Component {
  // Renders the entire app on the DOM

  addMoviePage = () => {
    this.props.history.push('/AddMovies');
   }

  

  render() {
    return (
      <div className="App">
        <h1>Hello! from HEADER</h1>
        <button onClick={this.addMoviePage} > would you like to add new movie? </button>

      </div>
    );
  }
}


export default withRouter(Header);
