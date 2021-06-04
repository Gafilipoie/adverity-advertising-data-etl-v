import React, { memo } from 'react';
import PropTypes from 'prop-types';
import StyledButton from './Button.style';

const Button = ({ children, disabled, action }) => {
  return (
    <StyledButton disabled={disabled} onClick={action}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  children: null,
  disabled: false,
  action: () => {},
};

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  action: PropTypes.func,
};

export default memo(Button);
