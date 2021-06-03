import styled, { css } from "styled-components";

const StyleDashboard = styled.div`
  ${({ theme }) => {
    const { spacing } = theme;

    return css`
      display: flex;

      .control-panel {
        flex: 1;
        margin-right: ${spacing.tiny};
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

StyleDashboard.displayName = "StyleDashboard";
export default StyleDashboard;
