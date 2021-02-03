import React from 'react';
import * as types from './types'
import {ToDoListItem} from './ToDoListItem'

interface ToDoListProps {
    todos: Array<types.Todo>;
    toggleTodo: types.toggleTodo;
}


export const ToDoList:React.FC<ToDoListProps> = ({todos, toggleTodo}) => {

    return <ul>{todos.map(todo => {
            return <ToDoListItem key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
        })}
    </ul>

}