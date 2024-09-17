import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './component/headerComponent/header.tsx'
import StickyPanel from './component/stickyPanel/stickyPanel.tsx'
import Footer from './component/footerComponent/footer.tsx'
import './index.css'
import Router from './ui/Router.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <StickyPanel/>
    <Router />
    <Footer/>
  </StrictMode>,
)
