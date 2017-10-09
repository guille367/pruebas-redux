import React from 'react';
import ReactDOM from 'react-dom';
import AddTodo from './AddTodo';
import Footer from './Footer';
import VisibleTodoList from './VisibleTodoList';

class App extends React.Component {
  render(){
    return (
      <div>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
      </div>
    );
  }
} 

export default App;