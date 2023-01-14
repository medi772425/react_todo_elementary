import React from 'react';
import { statusYet, statusStarted, statusComplete } from '../constants';

const List = ({ todos, deleteTodo }) => {
  return todos.map((todo, index) => {
    return (
      <li key={index}>
        {todo.title}

        <select>
          <option value={statusYet}>未着手</option>
          <option value={statusStarted}>進行中</option>
          <option value={statusComplete}>完了</option>
        </select>

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
