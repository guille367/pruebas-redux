const Todo = ({text, onClick, completed}) => (
  <li 
    onClick = { onClick }
    style = { completed ? 'text-decoration: line-through' : '' } >
    {text}
  </li>
)

export default Todo;