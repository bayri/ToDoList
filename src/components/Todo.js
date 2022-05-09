import React, { useState } from 'react';
import TodoForm from './TodoForm';

function Todo(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });
  const { todos, completeTodo, removeTodo, editTodo } = props;

  const submitEdit = (value) => {
    editTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
    if (edit.id) {
      return <TodoForm edit={edit} onSubmit={submitEdit} />;
    }
  };

  return todos.map((todo, index) => {
    return (
      <div
        key={index}
        className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
        <button className='remove-button' onClick={() => removeTodo(todo.id)}>Eliminar</button>
      </div>
    );
  });
}

export default Todo;
