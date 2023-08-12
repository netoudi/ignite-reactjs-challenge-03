import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@app/styles/global';
import { defaultTheme } from '@app/styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>Github Blog</h1>
    </ThemeProvider>
  );
}
