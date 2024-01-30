import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import { GlobalStyle } from './globalStyles/index.js'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <GlobalStyle/>

  </React.StrictMode>,
)
