*Functional components*

Componentes declarados como funciones ->
+ const bar () => { return <input/>; }

Pueden recibir propiedades como parámetro y usarlas dentro como pinte.
NO MANEJAN NI TIENEN ESTADO

*Class components*

Componentes que heredan de React.Component 
Todos los class component tienen que definir el método render que devuelve el jsx.
Los class components tienen estado y lo inicializan en su constructor.

Cada componente (siempre los de clase) mantienen su estado.
Este se inicializa en el constructor ->

class MyComponent extends Component {
  constructor(props) {
    super(props); // -> Llama al constructor del padre, en este caso al de Component
    
    this.state = { a: 0 }; // -> Inicializa el state del componente
  }
  render() {...}
}

*Controlled components*

Actualizan su valor dependiendo del estado. Se podría decir que bindea con alguna propiedad
del estado. La única forma de actualizar el estado es con el método setState definido dentro de
Component, de forma tal que se llama this.setState({ a: newVal }).

