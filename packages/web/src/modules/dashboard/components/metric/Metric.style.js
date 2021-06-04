import styled, { css } from 'styled-components';

const StyledMetric = styled.main`
  ${() => {
    return css`
      display: flex;
      justify-content: flex-start;
      flex: 3;
      background-color: grey;
    `;
  }}
`;

StyledMetric.displayName = 'StyledMetric';
export default StyledMetric;
