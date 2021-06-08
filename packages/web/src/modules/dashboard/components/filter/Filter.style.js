import styled, { css } from 'styled-components';

const StyledFilter = styled.div`
  ${({ theme }) => {
    const { spacing } = theme;

    return css`
      flex: 1;
      padding: ${spacing.small};
      margin-right: ${spacing.tiny};
      border: 1px solid #00000021;
      background-color: #cdeef7;
      box-shadow: 0px 0px 4px #00000021;

      .campaigns {
        margin-bottom: ${spacing.base};
      }

      .apply-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }
    `;
  }}
`;

StyledFilter.displayName = 'StyledFilter';
export default StyledFilter;
