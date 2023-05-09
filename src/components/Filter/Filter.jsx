import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => (
  <input value={value} onChange={onChange}></input>
);

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
