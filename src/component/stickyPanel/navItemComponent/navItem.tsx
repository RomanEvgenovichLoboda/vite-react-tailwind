import { ChevronDown, ChevronUp } from "lucide-react"
import style from './style.module.css'
import { INavMenu } from "../../../service/interface"
import { useState } from "react"
import {motion} from 'framer-motion'


export const NavItem = (menu:INavMenu) => {
    const [isSelect,setSelect]=useState(false)
  return (
		<div className={style.main}>
			<div
				className={style.title}
				onClick={() => menu.menuItems && setSelect(!isSelect)}
			>
				<motion.a
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}
					href={menu.link && menu.link}
				>
					{menu.title}
				</motion.a>
				{menu.menuItems && !isSelect && <ChevronDown />}
				{menu.menuItems && isSelect && <ChevronUp />}
			</div>
			{menu.menuItems && isSelect && (
				<div className={style.menu}>
					{menu.menuItems.map(e => (
						<motion.p
							initial={{ opacity: 0, scale: 0.5 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.2 }}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
							key={e.title}
						>
							{e.title}
						</motion.p>
					))}
				</div>
			)}
		</div>
	)
}
