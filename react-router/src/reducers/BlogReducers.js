import { actionTypes } from '../actions/ActionTypes';
import _ from 'lodash';

export default function blogReducers(state = {}, action) {
  switch(action.type) {
    case actionTypes.FETCH_POST_BY_ID:
      return {...state, [action.payload.data.id]: action.payload.data} ;
    case actionTypes.CREATE_POST:
      return state;
    case actionTypes.FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    case actionTypes.DELETE_POST:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}