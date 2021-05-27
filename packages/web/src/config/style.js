import { createGlobalStyle } from "styled-components";
import APP_CONFIG from "@adverity/config";

const theme = APP_CONFIG.theme.base;

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }

  .App {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    height: 100%;
    padding: ${theme.spacing.small};
  }

  .content {
    flex: 1 0 auto;
  }
`;

export default GlobalStyle;
