import { combineReducers } from 'redux';
import counter from './counter';
// tutorial:
// https://medium.com/@notrab/getting-started-with-create-react-app-redux-react-router-redux-thunk-d6a19259f71f
export default combineReducers({
    counter,
});
