import { UIActionTypes } from '../actions/UIActionTypes';

export default function UIReducer(state = {}, action) {
  switch(action.type) {
    case UIActionTypes.SUBMITTING_POST:
      return {...state, submittingPost: true}
    case UIActionTypes.SUBMITTING_POST_SUCCESS:
      return {...state, submittingPost: false}
    case UIActionTypes.DELETING_POST:
      return {...state, deletingPost: true}
    case UIActionTypes.DELETE_POST_SUCCESS:
      return {...state, deletingPost: false}
    default:
      return state;
  }
} 