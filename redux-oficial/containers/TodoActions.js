import ActionTypes from './TodoActionTypes';

export function addTodo(text) {
  return { type: ActionTypes.ADD_TODO, text }
}

export function removeTodo(id) {
  return { type: ActionTypes.REMOVE_TODO, id }
}

export function toggleTodo(id) {
  return { type: ActionTypes.REMOVE_TODO, id }
}