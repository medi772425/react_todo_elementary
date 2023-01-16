import React from 'react';
import { statuses } from '../constants';

const StateSelect = ({ onChange, status, id, isEmptyOption }) => {
  return (
    <select id={id} value={status} onChange={onChange}>
      {isEmptyOption && <option value=""></option>}
      {statuses.map((statusObj) => {
        let selected = '';

        // if (statusObj.value === status) {
        //   selected = 'selected';
        // }
        // selected={selected}

        return (
          <option key={statusObj.value} value={statusObj.value}>
            {statusObj.text}
          </option>
        );
      })}
    </select>
  );
};

export default StateSelect;
