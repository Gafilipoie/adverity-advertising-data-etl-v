import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  ${({ theme, disabled }) => {
    const { spacing } = theme;

    return css`
      cursor: pointer;
      min-width: 96px;
      padding: ${spacing.tiny} ${spacing.small};
      text-transform: capitalize;
      color: #ffffff;
      background-color: ${disabled ? '#D8D8D8' : '#856dcb'};
      border: 1px solid ${disabled ? '#D8D8D8' : '#4A4A4A'};
      border-radius: 4px;

      ${disabled &&
      css`
        cursor: not-allowed;
      `};
    `;
  }}
`;

StyledButton.displayName = 'StyledButton';
export default StyledButton;
