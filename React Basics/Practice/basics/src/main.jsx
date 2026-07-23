import { StrictMode,createElement } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const reactElement=createElement(
  'a',
  {href: "https://google.com"},
  'Click Me!'
)


createRoot(document.getElementById('root')).render(
    reactElement
)
