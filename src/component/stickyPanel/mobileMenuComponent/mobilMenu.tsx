import { AlignJustify, X } from 'lucide-react'
import style from './style.module.css'
import { useState } from 'react'
import { navMenu } from '../../../service/data'
import { NavItem } from '../navItemComponent/navItem'
import {motion} from 'framer-motion'


export const MobilMenu = () => {
    const [isOpen,setOpen] = useState(false)
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
						{navMenu.map(e => ( <NavItem {...e} key={e.title} /> ))}
					</div>
				</motion.div>
			)}
		</div>
	)
}
