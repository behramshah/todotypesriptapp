import React, { memo, useState } from 'react';
import {ToDoList} from './ToDoList';
import {AddToDoForm} from './addToDoForm'
import * as types from './types';

const initialTodos: Array <types.Todo> = []

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos)

  const toggleTodo: types.toggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if(todo===selectedTodo){
        return {...todo,
                complete: !todo.complete
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: types.addTodo = newTodo => {
    setTodos ([...todos, {id: Date.now(), text: newTodo, complete:false}]);
  };

  return (
    <React.Fragment>
      <div className="root">
        <ToDoList todos={todos} toggleTodo={toggleTodo}/>
        <AddToDoForm addTodo={addTodo} />  
      </div>
    </React.Fragment>
  );
}

export default memo(App);
