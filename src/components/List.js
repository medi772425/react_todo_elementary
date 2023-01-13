import React from 'react';

const List = ({ todos, deleteTodo }) => {
  return todos.map((todo, index) => {
    return (
      <li key={index}>
        {todo}
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
