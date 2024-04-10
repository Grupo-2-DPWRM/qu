import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './features/mainpage/components/App.jsx'
import './index.css'
import Footer from './features/mainpage/components/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <link href="https://unpkg.com/@csstools/normalize.css" rel="stylesheet" />
    <App />
    <Footer />
  </React.StrictMode>,
)
