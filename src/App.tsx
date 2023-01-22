import { ThemeProvider } from 'styled-components'

import './App.css'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <div></div>
    </ThemeProvider>
  )
}

export default App
