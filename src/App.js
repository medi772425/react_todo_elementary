import React, { useState } from 'react';
import List from './components/List';
import { statusYet } from './constants';

const App = () => {
  const iniTodos = [
    { title: 'ToDo1', status: statusYet },
    { title: 'ToDo2', status: statusYet },
  ];

  const [todos, setTodos] = useState(iniTodos);

  const addTodo = () => {
    const eleTitleNewTodo = document.querySelector('#title_new_todo');
    const new_todo = {
      title: eleTitleNewTodo.value,
      status: statusYet,
    };
    eleTitleNewTodo.value = '';

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
        <input type="text" id="title_new_todo" />
        <button onClick={addTodo}>追加</button>
        <ul>
          <List todos={todos} deleteTodo={deleteTodo} />
        </ul>
      </div>
    </>
  );
};

export default App;
