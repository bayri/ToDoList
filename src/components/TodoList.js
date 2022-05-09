import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    //si solo hay espacios en blanco los ignora
    if (!todo.text || /ˆ\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(todo, ...todos); // Si queremos ver qué tiene la lista de todos
  };

  const removeTodo = (id) => {
    console.log('Eliminando la tarea  id=', id);
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
        console.log('tarea completada ', todo.text);
      }
      return todo;
    });
    console.log('setNuevo todo list = ', ...updatedTodos);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
    </div>
  );
}

export default TodoList;
