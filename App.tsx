import React from 'react';
import { useColorScheme } from 'react-native';

import Home from './app/home';

import { ThemeProvider } from 'styled-components';
import theme from './app/theme';

const App = () => {
  const deviceTheme = useColorScheme();
  let t;
  if (deviceTheme == 'dark') {
    t = theme.dark
  } else {
    t = theme.light
  }

  return (
    <ThemeProvider theme={t}>
      <Home/>
    </ThemeProvider>
  )
}

export default App;