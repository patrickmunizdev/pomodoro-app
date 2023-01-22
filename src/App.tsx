import { ThemeProvider } from 'styled-components'
import './App.css'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div></div>
    </ThemeProvider>
  )
}

export default App
