import React from 'react';
import { statuses } from '../constants';

const StateSelect = ({ onChange, status, id, isEmptyOption }) => {
  return (
    <select id={id} onChange={onChange}>
      {isEmptyOption && <option value=""></option>}
      {statuses.map((statusObj) => {
        let selected = '';

        if (statusObj.value === status) {
          selected = 'selected';
        }

        return (
          <option value={statusObj.value} selected={selected}>
            {statusObj.text}
          </option>
        );
      })}
    </select>
  );
};

export default StateSelect;
