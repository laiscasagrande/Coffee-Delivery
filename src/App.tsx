import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GlobalStyle } from './global'
import { CoffeeContextProvider } from './contexts/CoffeeContext'
import { InformationCustomerContextProvider } from './contexts/informationCustomerCoontext'

function App() {

  return (

    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <CoffeeContextProvider>
          <InformationCustomerContextProvider>
            <Router />
          </InformationCustomerContextProvider>
        </CoffeeContextProvider>
      </BrowserRouter>
    </ThemeProvider>

  )
}

export default App
