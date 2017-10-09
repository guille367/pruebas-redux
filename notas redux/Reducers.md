Reducers:

Describen cómo el estado muta a partir del dispatch de una acción.
Si el action es el qué, el reducer es el cómo.

Es una función pura que recibe como parámetros el estado actual y la acción
y devuelve el estado actualizado.

Se llama reducer porque actúa como tal: Recibe un estado inicial y una función que
devuelve el nuevo estado mutado.

Buscamos mantener el reducer puro, por lo tanto nunca tenemos que:

* Mutar los argumentos
* Mutar el estado de la aplicación con side effects (sino más bien devolver el estado con su nueva forma)
* Llamar a funciones no puras

Ejemplo de reducer:

var initialState = {
  visibilityFilter: 'SHOW_ALL',
  todos: []
}

function appReducer(state = initialState, action){
  switch(action.type){
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, { visibilityFilter: action.filter });

    case ADD_TODO:
      return { ...state, 
      todos: [...state.todos, { text: "Terminar el resumen: completed: false" }]
      }

    case TOGGLE_TODO:
      return state.todos.map(todo => { todo.index === action.id ? return Object.assign({}, todo, { completed: !todo.completed }) : return todo; });

    default:
      return state;
  }
}

/*----------------------*/

Como esto es un tanto verboso, redux propone separar el reducer de la app en varios reducers.
el visibilityFilter se maneja aparte de los todos, por lo tanto podríamos hacer:


function todoReducer(state = [], action) {
  switch(action.type){
    case ADD_TODO:
        return [...state, { text: "Terminar el resumen: completed: false" }];

    case TOGGLE_TODO:
      return state.todos.map(todo => { todo.index === action.id ? return Object.assign({}, todo, { completed: !todo.completed }) : return todo; });
  
    default:
      return state;
  }
}

function appReducer(state = initialState, action) {
  switch(action.type){
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, { visibilityFilter: action.filter });

    case ADD_TODO:
    case TOGGLE_TODO:
      return Object.assign({}, state, { todos: todoReducer() })

    default:
      return state;
  }
}

ESTO ES FANTÁSTICO.
  como el actionReducer recibe como primer parámetro el array de todos y el segundo el action,
  nos olvidamos de la implementación del appReducer y se lo delegamos al primero.

Esto se llama reducer composition, es un patrón fundamental de las aplicaciones redux.


/*----------------------*/

Ahora, podemos cambiar el reducer principal para que devuelva siempre un objeto
(el estado de la aplicación) de esta forma:

function todos(state = [], action) {
  switch(action.type){
    case ADD_TODO:
        return [...state, { text: "Terminar el resumen: completed: false" }];

    case TOGGLE_TODO:
      return state.todos.map(todo => { todo.index === action.id ? return Object.assign({}, todo, { completed: !todo.completed }) : return todo; });
  
    default:
      return state;
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;

    default:
      return state;
  }
} 

function appReducer(state = [], action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  }
}

export default appReducer;

*De esta forma cada reducer maneja su parte del estado, los parámetros de cada reducer
varian dependiendo de la parte del estado que manejan.*


/*----------------------*/

*VER TAMBIÉN combineReducers*