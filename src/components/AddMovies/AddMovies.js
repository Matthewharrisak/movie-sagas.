import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddMovies extends Component {

  state={ 
    newMovie:{
    title: '',
    poster: '',
    description: '',
    genre_id: 0
  }}

  componentDidMount = () => {
    this.getGenres();
  }

  getGenres = () => {
    this.props.dispatch({
      type: 'GET_GENRE'
    });
  }

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
       <input  onChange={(event) => this.handleChange( 'title' , event)} type="text" id="newMovieTitle"/>
       <input  onChange={(event) => this.handleChange('poster' , event)} type="text" id="newDescription"/>
       <input  onChange={(event) => this.handleChange('description' , event)} type="text" id="newPoster"/>

      

      <select required onChange={(event) => this.handleChange('genre_id', event)}>  
       <option value='' >  default  </option>
       {this.props.reduxState.genres.map((genre) => {
         return <option key={genre.name} value={genre.id}> {genre.name} </option>
       })}
       </select>

       <button> SUBMIT NEW MOVIE </button>

       </form>
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
