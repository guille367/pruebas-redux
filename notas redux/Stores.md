Stores:

Las actions describen los cambios de la aplicación.
Los reducers describen cómo cambia el estado.
Los stores unen los actions y los reducers.

Mediante los stores podemos acceder a:

- getState(): Devuelve el estado actual de la aplicación.
- dispatch(action): Recibe un action y actualiza el estado de la aplicación.
- subscribe(listener): Registra listeners.
- "Unsubscribe": podemos desuscribirnos cómo listener con la function que devuelve el método anterior.

Teniendo los reducers listos, podemos crear el store de la siguiente forma:

import { createStore } from 'redux';
import { appReducer } from './Reducers.md' // -> Es la function 
                                                      que nos devolvió el combineReducers
                                                      que creamos al final en './Reducers.md'

let store = createStore(appReducer);

Podemos inicializar el estado del store pasandole un objeto como segundo parámetro:

let store = createStore(appReducer, window.STATE_FROM_SERVER);

Ejemplo de stores:

import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions';

console.log(store.getState());

let unsubscribe = store.subscribe(() => console.log(state.getState()));

store.dispatch(addTodo('primer todo'));
store.dispatch(addTodo('segundo todo'));
store.dispatch(addTodo('tercer todo'));
store.dispatch(toggleTodo(1));
store.dispatch(toggleTodo(0));
store.dispatch(ssetVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

unsubscribe();
