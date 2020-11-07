import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieItem extends Component {

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
        return  <div className='posterDiv'> 
                <button className='posterButton'><img  src={poster.poster}></img> <h4> {poster.title} </h4> 
                </button> 
                </div>
        })}
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(MovieItem);
