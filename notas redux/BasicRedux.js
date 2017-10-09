//import { combineReducer, createStore } from './redux';
var { combineReducers, createStore } = require('redux');

const ACTION_TYPES = {
  ADD_TODO: 'ADD_TODO',
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER',
  TOGGLE_TODO: 'TOGGLE_TODO',
}

const VISIBILITY_FILTERS = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
}

function todos(state = [], action) {
  switch(action.type) {
    case ACTION_TYPES.ADD_TODO:
      return [...state, action.todo]
    
    case ACTION_TYPES.TOGGLE_TODO:
      return state.map(todo => {
        if(todo.index === action.index)
          todo.completed = !todo.completed;

        return todo;
      })
    default: 
      return state;
  }
}

function visibilityFilter(state = "", action) {
  switch(action.type) {
    case ACTION_TYPES.SET_VISIBILITY_FILTER:
      return action.filter;
    
    default:
      return state;
  }
}

let combinedReducer = combineReducers({ visibilityFilter, todos });
let store = createStore(combinedReducer, { visibilityFilter: "SHOW_ALL", todos:[] });

var unsuscribe = store.subscribe(() => console.log(store.getState()));

var i = 0;

function addTodo(text) {
  return {
    type: ACTION_TYPES.ADD_TODO,
    todo: {
      text,
      completed: false,
      index: i++
    }
  }
}

function toggleTodo(index) {
  return {
    type: ACTION_TYPES.TOGGLE_TODO,
    index
  }
}

function setVisibilityFilter(filter) { 
  return {
    type: ACTION_TYPES.SET_VISIBILITY_FILTER,
    filter
  }
}

store.dispatch(addTodo("Prueba!"));
store.dispatch(addTodo("Prueba2!"));
store.dispatch(toggleTodo(1));
