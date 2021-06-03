import React, { useEffect, useState, memo } from 'react';
import * as R from 'ramda';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';

const Select = ({ options, onChange }) => {
  const [values, setValues] = useState([]);

  useEffect(() => {
    const newValues = R.map((item) => ({ value: item, label: item }), options || []);
    setValues(newValues);
  }, [options]);

  return (
    <ReactSelect
      closeMenuOnSelect={false}
      isMulti
      clearable
      noResultsText={null}
      options={values}
      onChange={onChange}
    />
  );
};

Select.defaultProps = {
  options: [],
  onChange: () => {},
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};

export default memo(Select);
