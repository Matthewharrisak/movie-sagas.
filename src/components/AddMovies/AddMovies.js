import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

class AddMovies extends Component {

  handleChange = (event) => {
    console.log(event , 'waht is logging?');
    
  //   this.setState({
  //   supported: event.target.value
  // });
}

  render() {
    return (
      <div className="App">
       <form onSubmit={this.handleChange} >
       <input type="text" id="newMovieTitle"/>
       <button> SUBMIT NEW MOVIE </button>
       </form>
   
      </div>
    );
  }
}

export default AddMovies;
