import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';

class HomePage extends Component {

    nextPage = () => {
        this.props.history.push('/DetailsPage');
      }

      // fires off funtions on pageload! 
      componentDidMount = () => {
        console.log(this.props.reduxState);
        this.props.dispatch({ type: 'GOT_MOVIES'});
      }   

  render() {
    return (
      <div className="homePage">
          {/* <MovieItem/> */}
          <div className="App">
        <h1>Home Goes HERE</h1>
        {this.props.reduxState.movies.map((poster) =>{
        return  <div className='posterDiv'> 
                <button onClick={this.nextPage} className='posterButton'><img  src={poster.poster}></img> <h4> {poster.title} </h4> 
                </button> 
                </div>
        })}
      </div>
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(HomePage);
