/**
 * Application entry point. Mounts the React app into #root and wraps it in StrictMode
 * for additional development checks (e.g. deprecated APIs, side effects).
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
