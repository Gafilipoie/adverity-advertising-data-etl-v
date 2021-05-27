import React from "react";
import * as R from 'ramda';
import { ThemeProvider } from "styled-components";
import APP_CONFIG from '@adverity/config';
import App from "./App";

const baseTheme = R.path(['theme', 'base'], APP_CONFIG);

const AppProvider = () => (
  <ThemeProvider theme={baseTheme}>
    <App />
  </ThemeProvider>
);

export default AppProvider;
