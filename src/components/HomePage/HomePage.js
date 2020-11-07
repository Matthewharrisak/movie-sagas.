import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomePage extends Component {

   
      // fires off funtions on pageload! 
      componentDidMount = () => {
        this.props.dispatch({ type: 'GOT_MOVIES'});
      }   

    //   nextPage = () => {
    //     this.props.history.push('/DetailsPage');
    //     this.props.dispatch({
    //         type: 'FETCH_DETAILS', payload: this.state
    //       });
    //   }
 
    //   handleChange = (event) => {
    //       this.setState({
    //           movieDetials: event.target.value
    //       });
    //       this.nextPage();
    //   }

  render() {
    return (
      <div className="homePage">
        <h1>Home Goes HERE</h1>
        {this.props.reduxState.movies.map((poster) =>{
            return  <div key={poster.title} className='posterDiv'> 
                        <button onClick={this.handleChange} className='posterButton'>
                            <img alt={poster.title} src={poster.poster}></img> 
                            <h4> {poster.title} </h4> 
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

export default connect(mapReduxStateToProps)(HomePage);
