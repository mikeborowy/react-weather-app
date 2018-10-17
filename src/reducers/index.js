import {combineReducers} from 'redux';
//reducers
import {preloader} from './preloader';
import {weather} from './weather';

export default combineReducers({
    preloader,
    weather
});