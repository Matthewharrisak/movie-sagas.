import React, { Component } from 'react';
import { connect } from 'react-redux';

class DetailsPage extends Component {

  componentDidMount = () => {
    console.log(this.props.reduxState);
    this.props.dispatch({ type: 'FETCH_DETAILS'});
  } 

  render() {
    return (
      <div className="App">
        <h1>YOU MADE IT TO DetailsPage</h1>
       <h1> we'll add details here </h1>
       {/* {JSON.stringify(this.props.reduxState)} */}
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(DetailsPage);
