import React from 'react';
import * as types from './types'
import './TodoListItem.css';

interface ToDoListItemProps {
    todo:types.Todo;
    toggleTodo:types.toggleTodo;
}

export const ToDoListItem: React.FC<ToDoListItemProps> = ({todo, toggleTodo}) => {
    return (
        <li>
            <label className={todo.complete ? 'complete' : undefined}>
                <input type="checkbox" checked={todo.complete} onChange={()=>toggleTodo(todo)}/>
                {todo.text}
            </label>
        </li>);
};