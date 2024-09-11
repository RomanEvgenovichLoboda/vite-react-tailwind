import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './component/headerComponent/header.tsx'
import StickyPanel from './component/stickyPanel/stickyPanel.tsx'
import App from './component/appComponent/App.tsx'
import Footer from './component/footerComponent/footer.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <StickyPanel/>
    <App />
    <Footer/>
  </StrictMode>,
)
