import React, { Component } from 'react';
import { connect } from 'react-redux';

class DetailsPage extends Component {

  
  homePage = () => {
    this.props.history.push('/');
   
  }


  // detailsPage is displaying the movie details from the reduxStore - movies reducer
  render() {
    return (
     <div className="App">

       <button onClick={() => this.homePage()}>HomePage</button>

       <h1> Detials  </h1>
       {this.props.reduxState.genres.map((fullDetail) =>{
         return <div key={fullDetail.name}> <img alt={fullDetail.title} src={fullDetail.poster}></img> 
          <p> {fullDetail.title} </p>
          <p> {fullDetail.description} </p>
          <p> {fullDetail.name} </p>
       </div>
       })}
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(DetailsPage);
