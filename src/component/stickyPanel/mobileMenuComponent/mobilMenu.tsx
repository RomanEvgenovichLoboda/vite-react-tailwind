import { AlignJustify, X } from 'lucide-react'
import style from './style.module.css'
import { useEffect, useState } from 'react'
import { navMenu, navMenuUk } from '../../../service/data'
import { NavItem } from '../navItemComponent/navItem'
import {motion} from 'framer-motion'
import { useTranslation } from 'react-i18next'

function MobilMenu (){
	const[locale,setLocale]=useTranslation()
    const [isOpen,setOpen] = useState(false)
	const [menu,setMenu]=useState(navMenuUk)
	useEffect(()=>{
		if(setLocale.language == 'en') setMenu(navMenu)
		else if(setLocale.language == 'uk') setMenu(navMenuUk)
	},[setLocale.language])

  return (
		<div className={style.main}>
			{isOpen 
            ? ( <X className={style.icon} size={50} onClick={() => setOpen(!isOpen)} /> ) 
            : ( <AlignJustify className={style.icon} size={50} onClick={() => setOpen(!isOpen)} /> )
            }
			{isOpen && (
				<motion.div className={style.menu}
				initial={{ opacity: 0, scale: 0.5 }}
    			animate={{ opacity: 1, scale: 1 }}
    			transition={{ duration: 0.2 }}
				>
					<div className={style.transparentDiv} onClick={() => setOpen(!isOpen)} ></div>
					<div className={style.zincDiv}>
						{menu&&menu.map(e => ( <NavItem {...e} key={e.title} /> ))}
					</div>
				</motion.div>
			)}
		</div>
	)
}
export default MobilMenu
