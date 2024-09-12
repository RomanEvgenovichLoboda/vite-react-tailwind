import style from './style.module.css'
import Menu from './menuComponent/menu'
import SmallMenu from './smallMenuComponent/smallMenu'
import { MouseEvent } from 'react'
import { AlignJustify } from 'lucide-react'

const openMenu = (e: MouseEvent<SVGSVGElement>) => {
    const menu = document.getElementById('menuAbsolute')
    console.log('open')
    menu?.classList.add('block')
}

function StickyPanel(){
    return (
			<div className={style.main}>
				<img src='../../../public/images/logo.png'></img>
				<Menu />
				<SmallMenu />
				<AlignJustify
					onClick={openMenu}
					size={50}
					className={style.menu}
				></AlignJustify>
			</div>
		)
}
export default StickyPanel