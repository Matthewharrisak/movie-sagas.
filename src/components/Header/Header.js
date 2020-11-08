import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Header extends Component {
  // Renders the entire app on the DOM

  // stores the add movie button throughout the page 
  addMoviePage = () => {
    this.props.history.push('/AddMovies');
   }

  

  render() {
    return (
      <div className="Header">
        <h1> Welcome to primeBuster</h1>
        <button onClick={this.addMoviePage} > would you like to add new movie? </button>
      </div>
    );
  }
}


export default withRouter(Header);
