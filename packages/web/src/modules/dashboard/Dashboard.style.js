import styled, { css } from 'styled-components';

const StyleDashboard = styled.div`
  ${() => {
    return css`
      display: flex;

      aside {
        display: flex;
        justify-content: flex-start;
        flex: 1;
        margin-right: 8px;
        background-color: red;
      }

      main {
        display: flex;
        justify-content: flex-start;
        flex: 3;
        background-color: grey;
      }
    `;
  }}
`;

StyleDashboard.displayName = 'StyleDashboard';
export default StyleDashboard;
