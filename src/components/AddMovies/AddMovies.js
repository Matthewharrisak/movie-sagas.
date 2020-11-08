import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddMovies extends Component {

  state={ 
    newMovie:{
    title: '',
    poster: '',
    description: '',
    genre_id: 1
  }}

  handleChange= (keyname, event) => {
    event.preventDefault();
    this.setState({
      newMovie:{
        ...this.state.newMovie,
        [keyname]: event.target.value,
    }});
  }

  addMovie= () => {
    this.props.dispatch({ type: 'ADD_MOVIE' , payload: this.state});
    console.log('were logging state' , this.state);
    
  }

  render() {
    return (
      <div className="App">
       <form onSubmit={this.addMovie}>
       <input  onChange={(event) =>this.handleChange( 'title' , event)} type="text" id="newMovieTitle"/>
       <input  onChange={(event) => this.handleChange('poster' , event)} type="text" id="newDescription"/>
       <input  onChange={(event) => this.handleChange('description' , event)} type="text" id="newPoster"/>



      <select  onChange={(event) => this.handleChange('genre_id' , event)}>  
       <option> sci-fi</option></select>
       
       <button> SUBMIT NEW MOVIE </button>

       </form>
      <h1> {this.state.newMovie.poster} </h1>
      <h1> {this.state.newMovie.title} </h1>
      <h1> {this.state.newMovie.description} </h1>
      {JSON.stringify(this.state.newMovie)}
      </div>
    );
  }
}
// value={this.state.newMovie.title}
// value={this.state.newMovie.poster}
// value={this.state.newMovie.description}
// value={this.state.newMovie.genre_id}
const mapReduxStateToProps = reduxState => ({
  reduxState
});
export default connect(mapReduxStateToProps)(AddMovies);
