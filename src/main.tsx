import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './layout/Header/Header'
import Main from './layout/Main/Main'
import Footer from './layout/Footer/Footer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <Header></Header>
   <Main></Main>
   <Footer></Footer>
  </React.StrictMode>,
)
