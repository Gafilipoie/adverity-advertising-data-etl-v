import React, { useEffect, useState, memo } from 'react';
import * as R from 'ramda';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';

const Select = ({ label, placeholder, options, onChange }) => {
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
      placeholder={placeholder}
      options={values}
      onChange={onChange}
    />
  );
};

Select.defaultProps = {
  label: '',
  placeholder: '',
  options: [],
  onChange: () => {},
};

Select.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};

export default memo(Select);
