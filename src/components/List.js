import React from 'react';

const List = ({ todos }) => {
  return todos.map((todo, index) => {
    return <li key={index}>{todo}</li>;
  });
};

export default List;
