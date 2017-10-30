import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import blogReducers from './reducers/BlogReducers';
import UIReducer from './reducers/UIReducers';
import thunkMiddleware from 'redux-thunk';

import BlogPosts from './containers/BlogPosts'; 
import NewPost from './containers/NewPost';
import PostShow from './containers/PostShow';

import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
  uiState: UIReducer,
  posts: blogReducers,
  form: formReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware, promiseMiddleware));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/posts/new" component={NewPost}/>
            <Route path="/posts/:id" component={PostShow}/>
            <Route path="/" component={BlogPosts}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
