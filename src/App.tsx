import React, { useState } from 'react';
import Header from './components/Header'
import GlobalStyle from './styles/GlobalStyles'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

import usePersistState from './utils/usePersistState'
function App() {

  const [theme, setTheme] = usePersistState<DefaultTheme>('theme', light)
  const toggletheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };
  return (
    <ThemeProvider theme={theme}>
      <Header toggletheme={toggletheme} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
