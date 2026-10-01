import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


//Ract-router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


//Components
import HomePage from './routes/HomePage.jsx'
import SearchProductPage from './routes/SearchProductPage.jsx'
import IndividualProductPage from './routes/IndividualProductPage.jsx'
import Carrinhopage from './routes/Carrinhopage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: '/product',
        element: <SearchProductPage />
      },
      {
        path: "/produto/:id",
        element: <IndividualProductPage />
      },
      {
        path: "/carrinho",
        element: <Carrinhopage />
      }
    ]
  }
])

//Context
import { ProductContextProvider } from './Context/ProductContext.jsx'
import { PromotionBannerProvider } from './Context/PromotionBanner.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductContextProvider>
      <PromotionBannerProvider>
        <RouterProvider router={router} />
      </PromotionBannerProvider>
    </ProductContextProvider>
  </StrictMode>,
)
