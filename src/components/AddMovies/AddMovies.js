import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

class AddMovies extends Component {

  state={ 
    newMovie:{
    title: '',
    poster: '',
    description: '',
  }}

  handleChange= (keyname, event) => {
    this.setState({
      newMovie:{
        ...this.state.newMovie,
        [keyname]: event.target.value,
    }});
  }

  addMovie= (event) => {
    event.preventDefault();

    console.log('were logging state' , this.state);
    
  }

  render() {
    return (
      <div className="App">
       <form onSubmit={this.addMovie}>
       <input value={this.state.newMovie.title} onChange={(event) =>this.handleChange( 'title' , event)} type="text" id="newMovieTitle"/>
       <input value={this.state.newMovie.poster} onChange={(event) => this.handleChange('poster' , event)} type="text" id="newDescription"/>
       <input value={this.state.newMovie.description} onChange={(event) => this.handleChange('description' , event)} type="text" id="newPoster"/>
      
       <button> SUBMIT NEW MOVIE </button>
       </form>
      <h1> {this.state.newMovie.newPoster} </h1>
      <h1> {this.state.newMovie.newTitle} </h1>
      <h1> {this.state.newMovie.newDescription} </h1>

      </div>
    );
  }
}


// title: event.target.value,
// poster: event.target.value,
// description: event.target.value,
export default AddMovies;
