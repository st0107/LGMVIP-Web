import React from 'react';
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';
import { useState } from 'react';

export default function ToDoList() {

    // state array which hold all todos

    const [todos , setTodos] = useState([]);

    // add todod to list
    const addTask = task => {
        if (!task.text){
            return 
        }
        const newTodos = [task, ...todos];
        setTodos(newTodos);
    }

    // remove todo from list
    const removeTask = id => {
        let updatedTasks = [...todos].filter(task => task.id !== id)
        setTodos(updatedTasks)
    }

    // task is completed
    const completedTask = id => {
        let updatedTasks = todos.map(todo =>{
            if (todo.id === id ){
                todo.isComplete = true;
            }
            return todo;
        })
        setTodos(updatedTasks);
    }
  return (
  <div>
        <ToDoForm addTask = {addTask} ></ToDoForm>
        <ToDo todos = {todos} completedTask = {completedTask} removeTask = {removeTask}></ToDo>
</div>)
}
