import styled, { css } from 'styled-components';

const StyleDashboard = styled.div`
  ${() => {
    return css`
      display: flex;
    `;
  }}
`;

StyleDashboard.displayName = 'StyleDashboard';
export default StyleDashboard;
