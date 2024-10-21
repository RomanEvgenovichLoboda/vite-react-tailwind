import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './component/headerComponent/header.tsx'
import StickyPanel from './component/stickyPanel/stickyPanel.tsx'
import Footer from './component/footerComponent/footer.tsx'
import './index.css'
import Router from './ui/Router.tsx'
import './i18n.ts'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Suspense fallback={<div className=' flex items-center justify-center text-6xl text-purple-700' style={{minHeight:'1000px'}}>Loading...</div>}>
			<Header />
			<StickyPanel />
			<Router />
			<Footer />
		</Suspense>
	</StrictMode>
)
