import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddMovies extends Component {


  // setting state so we can create a newMovie object 
  state={ 
    newMovie:{
    title: '',
    poster: '',
    description: '',
    genre_id: 0
  }}

  // fires off function on page load
  componentDidMount = () => {
    this.getGenres();
  }

  // gets genre data from Database, used in our <select> 
  getGenres = () => {
    this.props.dispatch({ type: 'GET_GENRE' });
  }

  // keyname is = to the values on each input, and setState changes the value or the state object
  handleChange= (keyname, event) => {
    event.preventDefault();
    this.setState({
      newMovie:{
        ...this.state.newMovie,
        [keyname]: event.target.value,
    }});
  }


    // addMovie dispatches the payload which is the values we collected from inputs and mutated them with setState
    //after slicking the addMovie button, user is directed to homepage
  addMovie= () => {
    this.props.dispatch({ type: 'ADD_MOVIE' , payload: this.state});
    this.props.history.push('/');

  }

  // button to redirect user to homepage
  cancelButton = () => {
    this.props.history.push('/');
   }

  render() {
    return (
         <div className="addMovie">
          <form onSubmit={this.addMovie}>
              <div id='titleDiv'>
                    <input  onChange={(event) => this.handleChange( 'title' , event)} 
                    type="text" id="newMovieTitle" placeholder='Movie Title'/>
              </div>
              <div id="posterDiv">
                <input  onChange={(event) => this.handleChange('poster' , event)}
                    type="text" id="newDescription" placeholder='Poster Link'/></div>
                 
              <div id='descriptionDiv'>
                    <textarea  onChange={(event) => this.handleChange('description' , event)} 
                    type="text" id="newPoster" placeholder='Movie Description'/>
              </div>    

              <div id='genreDiv'>
                    <select required onChange={(event) => this.handleChange('genre_id', event)}>  
                    <option value=''>  default  </option>
                  {this.props.reduxState.genres.map((genre) => {
                  return <option key={genre.name} value={genre.id}> {genre.name} </option>
                    })}
                  </select>
                  </div>

                  <button> SUBMIT NEW MOVIE </button>

           </form>


                    <button onClick={this.cancelButton}> cancel </button>
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});
export default connect(mapReduxStateToProps)(AddMovies);
