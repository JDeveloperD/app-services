import { AppCtx } from './AppCtx';
import { ThemeProvider } from 'styled-components';
import { DarkMode, GlobalStyles, LightMode } from '../theme';
import { ReactNode, useState } from 'react';

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(LightMode);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme.mode === 'light' ? DarkMode : LightMode
    );
  };

  return (
    <AppCtx.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </AppCtx.Provider>
  );
};

export default AppProvider;
