import 'utils/wdyr'

import { ContextProvider } from 'context'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import 'styles/index.css'
import App from './App'

ReactDOM.render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>,
  document.getElementById('root')
)
