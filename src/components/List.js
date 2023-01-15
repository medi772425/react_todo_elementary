import React from 'react';
import { statusYet, statusStarted, statusComplete } from '../constants';
import './../styles/style.css';

const List = ({ todos, deleteTodo, switchReadonly }) => {
  return todos.map((todo, index) => {
    return (
      <li key={index}>
        <span>{index}</span>
        <input type="text" className="title_list_todo" defaultValue={todo.title} readOnly={todo.readonly} />

        <select>
          <option value={statusYet}>未着手</option>
          <option value={statusStarted}>進行中</option>
          <option value={statusComplete}>完了</option>
        </select>

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
