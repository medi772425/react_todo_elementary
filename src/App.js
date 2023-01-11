import React, { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState(['ToDo1', 'ToDo2']);

  const addTodo = () => {
    const new_todo = document.querySelector('#text_new_todo').value;

    setTodos((prevTodos) => [...prevTodos, new_todo]);
  };

  return (
    <>
      <h1>ToDo</h1>
      <div>
        <input type="text" id="text_new_todo" />
        <button onClick={addTodo}>追加</button>
        <ul>
          <li>ToDo1</li>
          <li>ToDo2</li>
        </ul>
      </div>
    </>
  );
};

export default App;
