import React, { useState } from 'react';
import List from './components/List';
import { statusYet } from './constants';

const App = () => {
  const iniTodos = [
    { title: 'ToDo1', status: statusYet, readonly: true },
    { title: 'ToDo2', status: statusYet, readonly: true },
  ];

  const [todos, setTodos] = useState(iniTodos);

  const addTodo = () => {
    const eleTitleNewTodo = document.querySelector('#title_new_todo');
    const new_todo = {
      title: eleTitleNewTodo.value,
      status: statusYet,
      readonly: true,
    };
    eleTitleNewTodo.value = '';

    setTodos((prevTodos) => [...prevTodos, new_todo]);
  };

  const deleteTodo = (index) => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos];
      newTodos.splice(index, 1);

      console.log(newTodos);

      return newTodos;
    });
  };

  const switchReadonly = (index, readonly) => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos];
      newTodos[index].readonly = readonly;

      return newTodos;
    });
  };

  return (
    <>
      <h1>ToDo</h1>
      <div>
        <input type="text" id="title_new_todo" />
        <button onClick={addTodo}>追加</button>
        <ul>
          <List todos={todos} deleteTodo={deleteTodo} switchReadonly={switchReadonly} />
        </ul>
      </div>
    </>
  );
};

export default App;
