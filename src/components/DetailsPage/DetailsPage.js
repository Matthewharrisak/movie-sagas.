import React, { Component } from 'react';
import { connect } from 'react-redux';

class DetailsPage extends Component {


  render() {
    return (
      <div className="App">
        <h1>YOU MADE IT TO DetailsPage</h1>
   
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(DetailsPage);
