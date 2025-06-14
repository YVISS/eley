import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './css/index.css'
import './css/divider.css'
import './css/header.css'
import './css/reset.css'
import './css/utils.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
