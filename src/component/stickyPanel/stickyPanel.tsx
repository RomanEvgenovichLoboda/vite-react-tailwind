import style from './style.module.css'
import { NavItem } from './navItemComponent/navItem'
import { navMenu } from '../../service/data'
import { MobilMenu } from './mobileMenuComponent/mobilMenu'
import Search from './searchComponent/search'
import { useState } from 'react'

function StickyPanel(){
	const [search, setSearch] = useState('')
    return (
			<div className={style.main}>
				<a href='/'>
					<img src='../../../public/images/logo.png'></img>
				</a>
				<nav>
					{navMenu.map(e => (
						<NavItem {...e} key={e.title} />
					))}
				</nav>
				{/* <Search className={style.search} size={50}/> */}
				<input
					className='ml-auto text-purple-950'
					placeholder='Знайти продукт'
					onChange={e => setSearch(e.target.value)}
				></input>
				{search && <Search search={search} />}
				<MobilMenu />
			</div>
		)
}
export default StickyPanel