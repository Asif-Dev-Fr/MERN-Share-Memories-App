import { combineReducers } from 'redux';
import posts from './posts';

export default combineReducers({
    // put all the reducers that we have here : 
    posts: posts
});