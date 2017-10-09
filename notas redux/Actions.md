Actions:
  Constan de la información que van a recibir el stores sobre la cuál va a actuar.
  Son objetos planos que constan de un tipo (generalmente constantes) y el resto de 
  la información que necesitamos.

Eg: 

const ADD_TODO = 'ADD_TODO';

{
  type: ADD_TODO,
  text: 'Estudiar para el jueves'
}

Esta acción la vamos a "despachar" con el dispatch()

La idea es pasar la menor cantidad de información posible en cada action.
Es decir, no pasar el objeto entero sino la data que necesitamos para la acción correspondiente.

Eg:

{
  type: TOGGLE_TODO,
  index: 5
}

en lugar de 
{
  type: TOGGLE_TODO,
  todo: {
    text: 'Estudiar para el jueves',
    index:5
  }
}


Podemos hacer el dispatch desde store.dispatch() o con el helper 
de react-redux connect()
