import { combineReducers } from 'redux';
import { counterReducer } from './counter/couter-reducer';

export default combineReducers({
    counter: counterReducer,
});
