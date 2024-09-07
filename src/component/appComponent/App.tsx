import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import Header from '../headerComponent/header'
import Menu from '../menuComponent/menu'
import Footer from '../footerComponent/footer'

import style from './style.module.css'

function App() {
 
  const [count, setCount] = useState(0)

  return (
	// <div className={style.container}></div>
	<div className='bg-slate-100 w-full h-96'></div>
		// <>
		// 	<div>
		// 		<a href='https://vitejs.dev' target='_blank'>
		// 			<img src={viteLogo} className={style.logo} alt='Vite logo' />
		// 		</a>
		// 		<a href='https://react.dev' target='_blank'>
		// 			<img src={reactLogo} className='logo react' alt='React logo' />
		// 		</a>
		// 	</div>
		// 	<h1>Vite + React</h1>
		// 	<div className='card'>
		// 		<button onClick={() => setCount(count => count + 1)}>
		// 			count is {count}
		// 		</button>
		// 		<p>
		// 			Edit <code>src/App.tsx</code> and save to test HMR
		// 		</p>
		// 	</div>
		// 	<p className='read-the-docs'>
		// 		Click on the Vite and React logos to learn more
		// 	</p>
		// 	{/* <h1 className='text-3xl font-bold underline'>Hello world!</h1> */}
		// </>
	)
}

export default App
