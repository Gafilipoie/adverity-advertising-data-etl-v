import styled, { css } from 'styled-components';

const StyledMetric = styled.main`
  ${() => {
    return css`
      display: flex;
      justify-content: flex-start;
      flex: 3;
    `;
  }}
`;

StyledMetric.displayName = 'StyledMetric';
export default StyledMetric;
