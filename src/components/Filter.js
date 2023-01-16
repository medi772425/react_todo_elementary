import React from 'react';
import StateSelect from './StateSelect';

const Filter = ({ todos, setTodos }) => {
  const filter = () => {
    const filterText = document.querySelector('#text_filter').value;
    const filterStatus = Number(document.querySelector('#select_filter').value);

    const filtered = todos.map((todo) => {
      let is_show = true;
      if (filterText !== '' && todo.title.toString().indexOf(filterText) < 0) {
        is_show = false;
      }

      if (filterStatus !== 0 && todo.status !== filterStatus) {
        is_show = false;
      }

      todo.is_show = is_show;

      return todo;
    });

    setTodos(filtered);
  };

  return (
    <div>
      <input type="text" id="text_filter" onChange={filter} />

      <StateSelect id={'select_filter'} onChange={filter} isEmptyOption={true} />
    </div>
  );
};

export default Filter;
