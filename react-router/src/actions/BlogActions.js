import axios from 'axios';
import { actionTypes } from './ActionTypes';

const API_KEY = '?key=elwilisdelagente'
const API_URL = `http://reduxblog.herokuapp.com/api/posts${API_KEY}`;

export function fetchPosts() {
  const request = axios.get(API_URL);
  return {
    type: actionTypes.FETCH_POSTS,
    payload: request
  }
}