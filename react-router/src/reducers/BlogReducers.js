import { actionTypes } from '../actions/ActionTypes';
import _ from 'lodash';

export default function blogReducers(state = {}, action) {
  switch(action.type) {
    case actionTypes.FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    
    default:
      return state;
  }
}