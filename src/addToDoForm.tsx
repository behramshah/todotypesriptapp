import React, { useState, ChangeEvent, FormEvent } from 'react';
import * as types from './types';

interface AddToDoFormProps {
    addTodo: types.addTodo;
}

export const AddToDoForm: React.FC<AddToDoFormProps> = ({ addTodo }) => {

    const [newTodo, setNewTodo] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo (e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        addTodo(newTodo);
    };

    return <form>
        <input type='text' value={newTodo} onChange={handleChange}/>
        <button type='submit' onClick={handleSubmit}> Add Todo</button>
    </form>
}