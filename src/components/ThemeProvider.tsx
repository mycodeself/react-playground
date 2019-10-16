import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import materialColors from '../../assets/material-colors.json';

const theme = {
  materialColors,
  colors: {
    primary: '',
    secondary: ''
  }
};

export const ThemeProvider: React.FC = ({ children }) => (
  <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
);
