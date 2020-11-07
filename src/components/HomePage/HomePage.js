import Axios from 'axios';
import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';

class HomePage extends Component {

    state = {
        movieObject: []
    };

    getMovies = () => {
        console.log('in get movies!');
        axios({
            method: 'GET',
            url: '/api/genre'
        }).then((response) => {
            console.log(response.data);
            this.setState({
                movieObject: response.data                
            });
            console.log(this.state , 'from GetMOvies state');
            
        }).catch((error) => {
            console.log(error);
        });
    }

    componentDidMount = () => {
        this.getMovies();
    }
  render() {
    return (
      <div className="App">
        <h1>Home Goes HERE</h1>
        {this.state.movieObject.map((poster) =>{
           return <button> <img src={poster.poster}></img> </button>
        })}
        {/* {JSON.stringify(this.state.movieObject.poster)} */}
        <button>Details</button>
      </div>
    );
  }
}

export default HomePage;
