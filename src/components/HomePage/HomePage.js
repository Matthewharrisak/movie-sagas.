import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomePage extends Component {

  

      // fires off funtions on pageload
      componentDidMount = () => {
        this.props.dispatch({ type: 'GOT_MOVIES'});
      }   

        // route to the details page, called in the handleChange function
      nextPage = () => {
        this.props.history.push('/DetailsPage');
       
      }

      
    
      // connected to buttons displaying the poster, ID from object is dispatched to the reduxStore
      handleChange = (posterClicked) => {
         this.props.dispatch({
        type: 'FETCH_DETAILS', payload: posterClicked});
          this.nextPage();
        }



render() {
  return (
      <div className="homePage">
        
        {this.props.reduxState.movies.map((poster) =>{
            return  <div key={poster.title} className='posterDiv'> 
                        <button onClick={() => this.handleChange(poster)} className='posterButton'>
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
