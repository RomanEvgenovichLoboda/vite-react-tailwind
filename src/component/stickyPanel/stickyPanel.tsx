import style from './style.module.css'
import { NavItem } from './navItemComponent/navItem'
import { navMenu, navMenuUk } from '../../service/data'
import  MobilMenu  from './mobileMenuComponent/mobilMenu'
import Search from './searchComponent/search'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

function StickyPanel(){
	const[menu,setMenu]=useState(navMenu)
	const [search, setSearch] = useState('')
	const[locale,setLocale]=useTranslation()
	useEffect(() => {
		if(setLocale.language=='en')setMenu(navMenu)
		else if (setLocale.language=='uk')setMenu(navMenuUk)
	}, [setLocale.language])

    return (
			<div className={style.main}>
				<a href='/'>
					<img src='../../../public/images/logo.png'></img>
				</a>
				<nav>
					{menu.map(e => (
						<NavItem {...e} key={e.title} />
					))}
				</nav>
				<input
					className='ml-auto text-purple-950'
					placeholder={locale('search')}
					onChange={e => setSearch(e.target.value)}
				></input>
				{search && <Search search={search} />}
				<MobilMenu />
			</div>
		)
}
export default StickyPanel