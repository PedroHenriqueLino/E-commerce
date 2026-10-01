import './App.css'

import Footer from './Components/FooterFeitoPeloChatGpt/Footer'
import NavBar from './Components/NavBar/NavBar'

import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'

function App() {

  const location = useLocation()

  const isCarrinho = location.pathname === '/carrinho'

  return (
    <>
      <NavBar />

      <Toaster />
      <div className={`routes ${isCarrinho ? 'carrinho-page' : ''}`}>
        <Outlet />
      </div>

      <Footer />
    </>
  )
}

export default App