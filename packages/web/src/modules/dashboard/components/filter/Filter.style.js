import styled, { css } from 'styled-components';

const StyledFilter = styled.div`
  ${({ theme }) => {
    const { spacing } = theme;

    return css`
      flex: 1;
      margin-right: ${spacing.tiny};

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
