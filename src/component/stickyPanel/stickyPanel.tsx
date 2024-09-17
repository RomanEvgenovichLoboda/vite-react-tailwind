import style from './style.module.css'
import { NavItem } from './navItemComponent/navItem'
import { navMenu } from '../../service/data'
import { MobilMenu } from './mobileMenuComponent/mobilMenu'
import { Search } from 'lucide-react'

function StickyPanel(){
    return (
		<div className={style.main}>
			<a href='/'>
				<img src='../../../public/images/logo.png'></img>
			</a>
			<nav>
				{navMenu.map(e=><NavItem {...e} key={e.title}/>)}
			</nav>
			<Search className={style.search} size={50}/>
			<MobilMenu/>
		</div>
	)
}
export default StickyPanel