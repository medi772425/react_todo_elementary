import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import List from './components/List';
import Filter from './components/Filter';
import { statusYet } from './constants';

const App = () => {
  const iniTodos = [];

  const [todos, setTodos] = useState(iniTodos);

  const addTodo = () => {
    const eleTitleNewTodo = document.querySelector('#title_new_todo');
    const createdDay = new Date().toLocaleDateString();
    const newTodo = {
      title: eleTitleNewTodo.value,
      status: statusYet,
      readonly: true,
      id: uuidv4(),
      createdDay,
      isShow: true,
    };
    eleTitleNewTodo.value = '';

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const deleteTodo = (index) => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos];
      newTodos.splice(index, 1);

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

  const editTodoTitle = (index, newTitle) => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos];
      newTodos[index].title = newTitle;

      return newTodos;
    });
  };

  const editTodoStatus = (index, newStatus) => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos];
      newTodos[index].status = Number(newStatus);

      return newTodos;
    });
  };

  return (
    <>
      <h1>ToDo</h1>
      <div>
        <input type="text" id="title_new_todo" />
        <button onClick={addTodo}>追加</button>
        <Filter todos={todos} setTodos={setTodos} />
        <ul>
          <List
            todos={todos}
            deleteTodo={deleteTodo}
            switchReadonly={switchReadonly}
            editTodoTitle={editTodoTitle}
            editTodoStatus={editTodoStatus}
          />
        </ul>
      </div>
    </>
  );
};

export default App;
