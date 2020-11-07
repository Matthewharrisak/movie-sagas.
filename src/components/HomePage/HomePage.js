import Axios from 'axios';
import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

class HomePage extends Component {

    // setting state as an empty [] lets us map, through the state inside of our getMovies function
    // state = {
    //     movieObject: []
    // };

    // axios get request to receive movie object from database and sets the object to this components State
    // getMovies = () => {
    //     console.log('in get movies!');
    //     axios({
    //         method: 'GET',
    //         url: '/api/genre'
    //     }).then((response) => {
    //         console.log(response.data);
    //         this.setState({
    //             movieObject: response.data                
    //         });
    //         console.log(this.state , 'from GetMOvies state');
            
    //     }).catch((error) => {
    //         console.log(error);
    //     });
    // }

    // fires off funtions on pageload! 
    componentDidMount = () => {
     console.log(this.props.reduxState);
     this.props.dispatch({ type: 'GOT_MOVIES'});

     }

  

  render() {
    return (
      <div className="App">
        <h1>Home Goes HERE</h1>
        {this.props.reduxState.movies.map((poster) =>{
           return  <div className='posterDiv'> <button> <img  src={poster.poster}></img> 
            </button> {poster.description} </div>
        })}
        {/* {JSON.stringify(this.props.reduxState.movies)} */}
        <button>Details</button>
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(HomePage);
