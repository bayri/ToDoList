import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput('');
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          name="tarea"
          type="text"
          placeholder="Agrega un elemento"
          value={input}
          onChange={handleChange}
          ref={inputRef}
          className="todo-input"
        />
        <button className="todo-button">Agregar tarea</button>
      </form>
    </div>
  );
}

export default TodoForm;
