import { ChevronDown, ChevronUp } from "lucide-react"
import style from './style.module.css'
import { INavMenu } from "../../../service/interface"
import { useState } from "react"

export const NavItem = (menu:INavMenu) => {
    const [isSelect,setSelect]=useState(false)
  return (
		<div className={style.main}>
			<div
				className={style.title}
				onClick={() => menu.menuItems && setSelect(!isSelect)}
			>
				<a href={menu.link && menu.link}>{menu.title}</a>
				{menu.menuItems && !isSelect && <ChevronDown />}
				{menu.menuItems && isSelect && <ChevronUp />}
			</div>
			{menu.menuItems && isSelect && (
				<div className={style.menu}>
					{menu.menuItems.map(e => (
						<p key={e.title}>{e.title}</p>
					))}
				</div>
			)}
		</div>
	)
}
