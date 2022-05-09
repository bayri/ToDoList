import React from 'react';
import './style.css';
import TodoList from './components/TodoList';

export default function App() {
  return (
    <div className="todo-app">
      <h1>Lista de Metas </h1>
      <TodoList />
    </div>
  );
}
