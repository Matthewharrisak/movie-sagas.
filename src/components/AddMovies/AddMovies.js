import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

class AddMovies extends Component {

  render() {
    return (
      <div className="App">
       <form>
       <input type="text" id="newMovieTitle"/>
       <button> SUBMIT NEW MOVIE </button>
       </form>
   
      </div>
    );
  }
}

export default AddMovies;
