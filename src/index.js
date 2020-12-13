
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import Axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
yield takeEvery('GOT_MOVIES', fetchMovie)
yield takeEvery('FETCH_DETAILS' , fetchMovieDetails)
yield takeEvery('ADD_MOVIE', newMovie)
yield takeEvery('GET_GENRE', getGenre)

}

// function that gets genre data from Database and is used for selector
function* getGenre(){
    const genreList = yield Axios.get('/api/genre');
    yield put({type: 'SET_GENRES' , payload: genreList.data})

}

// function that gets data from AddMovie page and posts data to Database
function* newMovie(action){
    console.log('what are we getting from add movie?' , action.payload);
    yield Axios.post('/api/movie', action.payload.newMovie);
}

// function to get object from database and sends to the reduxStore 
function* fetchMovie() {
        const movieObject = yield Axios.get('/api/movie');
        yield put({type: 'SET_MOVIES' , payload: movieObject.data});
}


// function that fetches movie details based on clicking an image on the HomePage
function* fetchMovieDetails (posterClicked) {
        const movieDetails = yield Axios.get(`/api/genre/${posterClicked.payload.id}`);
        yield put({type: 'SET_GENRES', payload: movieDetails.data});
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();


// Used to store movies returned from the server -- adds database movie to reduxStore  
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();