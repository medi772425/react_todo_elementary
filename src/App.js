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

  const deleteTodo = (index) => {
    setTodos((prevTodos) => {
      const l_newTodos = [...prevTodos];
      l_newTodos.splice(index, 1);

      return l_newTodos;
    });
  };

  return (
    <>
      <h1>ToDo</h1>
      <div>
        <input type="text" id="text_new_todo" />
        <button onClick={addTodo}>追加</button>
        <ul>
          <List todos={todos} deleteTodo={deleteTodo} />
        </ul>
      </div>
    </>
  );
};

export default App;
