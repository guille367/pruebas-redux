combineReducers

Similar a lo visto en la última parte de Reducers.

En este caso es una function que recibe un objeto cuyas propiedades son los reducers
y los bindea al estado actual y a un action.

Eg:

var app = function(state = {}, action) {
  return {
    todoReducer: todoReducer(state.todos, action)
    visibilityFilterReducer: visibilityFilterReducer(state.visibilityFilter, action)
  }
}

Sería más sencillo usando combineReducers:

import { combineReducers } from 'redux';
import { todoReducer, visibilityFilterReducer } from 'my-reducers';

var app = combineReducers({
  todos,
  visibilityFilter,
});

ó

var app = combineReducers({
  a: todoReducer,
  b: visibilityFilterReducer,
});

*IMPORTANTISIMO: EL PARÁMETRO DE CADA REDUCER VA A MATCHEAR CON EL NOMBRE DE LA PROPERTY DEL STATE
EN EL COMBINE REDUCER ( todos -> usa cómo parámetro state.todos y visibilityFilter -> state.visibilityFilter )


CombineReducers va a generar una function que llama a cada reducer y genera combina los resultados en un
sólo objeto
