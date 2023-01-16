import React from 'react';
import StateSelect from './StateSelect';
import { statusStarted, statusComplete } from './../constants';
import './../styles/style.css';

const List = ({ todos, deleteTodo, switchReadonly, editTodoTitle, editTodoStatus }) => {
  return todos.map((todo, index) => {
    if (todo.isShow === false) {
      return '';
    }

    let titleColor = '';
    switch (todo.status) {
      case statusStarted:
        titleColor = 'blue';
        break;

      case statusComplete:
        titleColor = 'green';
        break;

      // no default
    }

    return (
      <li key={todo.id}>
        <input
          type="text"
          id={`title_list_todo${index}`}
          className={`title_list_todo ${titleColor}`}
          defaultValue={todo.title}
          readOnly={todo.readonly}
        />

        <StateSelect
          onChange={(event) => {
            editTodoStatus(index, event.target.value);
          }}
          status={todo.status}
        />

        {todo.readonly ? (
          <button
            onClick={() => {
              switchReadonly(index, false);
            }}
          >
            編集
          </button>
        ) : (
          <button
            onClick={() => {
              switchReadonly(index, true);
              const newTitle = document.querySelector(`#title_list_todo${index}`).value;
              editTodoTitle(index, newTitle);
            }}
          >
            編集終了
          </button>
        )}

        <button
          onClick={() => {
            deleteTodo(index);
          }}
        >
          削除
        </button>

        <span>作成日:{todo.createdDay}</span>
      </li>
    );
  });
};

export default List;
