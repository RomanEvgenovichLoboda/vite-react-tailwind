import { AlignJustify, X } from 'lucide-react'
import style from './style.module.css'
import { useState } from 'react'
import { navMenu } from '../../../service/data'
import { NavItem } from '../navItemComponent/navItem'


export const MobilMenu = () => {
    const [isOpen,setOpen] = useState(false)
  return (
		<div className={style.main}>
			{isOpen 
            ? ( <X className={style.icon} size={50} onClick={() => setOpen(!isOpen)} /> ) 
            : ( <AlignJustify className={style.icon} size={50} onClick={() => setOpen(!isOpen)} /> )
            }
			{isOpen && (
				<div className={style.menu}>
					<div className={style.transparentDiv} onClick={() => setOpen(!isOpen)} ></div>
					<div className={style.zincDiv}>
						{navMenu.map(e => ( <NavItem {...e} key={e.title} /> ))}
					</div>
				</div>
			)}
		</div>
	)
}
