import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <div className='header'>
      <h1> JOBHUB </h1>
    </div>
     
    <App />
    </>
    
  </StrictMode>,
)
