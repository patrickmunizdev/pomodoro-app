import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';

function App() {
    return (
    <ThemeProvider theme={defaultTheme}>
      É nozes
    </ThemeProvider>
  )
}

export default App
