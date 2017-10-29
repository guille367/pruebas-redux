import axios from 'axios';
import { actionTypes } from './ActionTypes';
import { UIActionTypes } from './UIActionTypes';

const API_KEY = '?key=elwilisdelagente'
const API_URL = `http://reduxblog.herokuapp.com/api/posts${API_KEY}`;

export function fetchPosts() {
  const request = axios.get(API_URL);
  return {
    type: actionTypes.FETCH_POSTS,
    payload: request
  }
}

export function createPost(values, cbSuccess) { 
  return (dispatch, getState) => {
    console.log(getState())
    dispatch(submitPost())
    setTimeout(function() {
      return axios.post(`${API_URL}`, values)
      .then(() => {
      dispatch(submitPostSuccess());
      cbSuccess()});
    }, 1000);
  }
}

function submitPostSuccess() {
  return {
    type: UIActionTypes.SUBMITTING_POST_SUCCESS
  }
}

function submitPost() {
  return {
    type: UIActionTypes.SUBMITTING_POST
  }
}

function createPostComplete(request) {
  return {
    type: actionTypes.CREATE_POST,
    payload: request
  }
}



// function fetchPosts(subreddit) {
//   return dispatch => {
//     dispatch(requestPosts(subreddit))
//     return fetch(`https://www.reddit.com/r/${subreddit}.json`)
//       .then(response => response.json())
//       .then(json => dispatch(receivePosts(subreddit, json)))
//   }
// }