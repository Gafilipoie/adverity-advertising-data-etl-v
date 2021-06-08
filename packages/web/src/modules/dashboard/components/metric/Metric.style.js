import styled, { css } from 'styled-components';

const StyledMetric = styled.main`
  ${({ theme }) => {
    const { spacing } = theme;
    return css`
      display: flex;
      justify-content: flex-start;
      flex: 3;
      padding: ${spacing.small};
      border: 1px solid #00000021;
      box-shadow: 0px 0px 4px #00000021;
    `;
  }}
`;

StyledMetric.displayName = 'StyledMetric';
export default StyledMetric;
