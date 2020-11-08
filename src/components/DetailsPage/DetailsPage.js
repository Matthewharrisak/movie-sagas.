import React, { Component } from 'react';
import { connect } from 'react-redux';

class DetailsPage extends Component {

  
  homePage = () => {
    this.props.history.push('/');
   
  }

  render() {
    return (
     <div className="App">
       <button onClick={() => this.homePage()}>HomePage</button>

        <h1>YOU MADE IT TO DetailsPage</h1>
       <h1> we'll add details here </h1>
       {this.props.reduxState.genres.map((fullDetail) =>{
         return <div key={fullDetail.name}> <img alt={fullDetail.title} src={fullDetail.poster}></img> 
          <p> {fullDetail.title} </p>
          <p> {fullDetail.description} </p>
          <p> {fullDetail.name} </p>
       </div>
       })}
       {/* {JSON.stringify(this.props.reduxState)} */}
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(DetailsPage);
