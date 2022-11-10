import React from 'react'
import ReactDOM from 'react-dom/client'
import Rotas from './routes/routes'
import ResponsiveAppBar from './components/HeaderBar/index'
import GlobalStyle from './styles/globalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResponsiveAppBar/>
    <Rotas />
    <GlobalStyle/>
  </React.StrictMode>
)
