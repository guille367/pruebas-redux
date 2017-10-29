import { UIActionTypes } from '../actions/UIActionTypes';

export default function UIReducer(state = {}, action) {
  switch(action.type) {
    case UIActionTypes.SUBMITTING_POST:
      return {...state, submittingPost: true}
    case UIActionTypes.SUBMITTING_POST_SUCCESS:
      return {...state, submittingPost: false}
  }
  return state;
} 