import React from 'react';
import StateSelect from './StateSelect';
import './../styles/style.css';

const List = ({ todos, deleteTodo, switchReadonly, editTodoTitle, editTodoStatus }) => {
  return todos.map((todo, index) => {
    if (todo.is_show === false) {
      return '';
    }

    return (
      <li key={todo.id}>
        <input
          type="text"
          id={`title_list_todo${index}`}
          className="title_list_todo"
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
      </li>
    );
  });
};

export default List;
