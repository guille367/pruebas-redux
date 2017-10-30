import axios from 'axios';
import { actionTypes } from './ActionTypes';
import { UIActionTypes } from './UIActionTypes';

const API_KEY = '?key=elwilisdelagente'
const API_URL = `http://reduxblog.herokuapp.com/api/posts`;

export function fetchPosts() {
  const request = axios.get(`${API_URL}${API_KEY}`);
  return {
    type: actionTypes.FETCH_POSTS,
    payload: request
  }
}

export function createPost(values, cbSuccess) { 
  return (dispatch, getState) => {
    dispatch(submitPost())
    return axios.post(`${API_URL}${API_KEY}`, values)
      .then(() => {
      dispatch(submitPostSuccess());
      cbSuccess()
    });
  }
}

export function fetchPost(id) {
  const request = axios.get(`${API_URL}/${id}${API_KEY}`);

  return {
    type: actionTypes.FETCH_POST_BY_ID,
    payload: request,
  }
}

export function deletePost(id, cbSuccess) {
  return dispatch => {
    dispatch(deletingPost());

    return axios.delete(`${API_URL}/${id}`)
      .then(() => { 
        dispatch(deletePostComplete(id));
        dispatch(deletePostSuccess(id));
        cbSuccess();
      });
      
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

function deletingPost() {
  return {
    type: UIActionTypes.DELETING_POST
  }
}

function deletePostComplete(id) {
  return {
    type: actionTypes.DELETE_POST,
    payload: id
  }
}

function deletePostSuccess(id) {
  return {
    type: UIActionTypes.DELETE_POST_SUCCESS,
    payload: id
  }
}