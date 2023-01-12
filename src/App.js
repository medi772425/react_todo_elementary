import React, { useState } from 'react';
import List from './components/List';

const App = () => {
  const [todos, setTodos] = useState(['ToDo1', 'ToDo2']);

  const addTodo = () => {
    const eleTextNewTodo = document.querySelector('#text_new_todo');
    const new_todo = eleTextNewTodo.value;
    eleTextNewTodo.value = '';

    setTodos((prevTodos) => [...prevTodos, new_todo]);
  };

  return (
    <>
      <h1>ToDo</h1>
      <div>
        <input type="text" id="text_new_todo" />
        <button onClick={addTodo}>追加</button>
        <ul>
          <List todos={todos} />
        </ul>
      </div>
    </>
  );
};

export default App;
