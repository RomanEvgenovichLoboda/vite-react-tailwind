import style from './style.module.css'
import { Camera } from 'lucide-react'
import { Globe, AtSign, Phone } from 'lucide-react'
function Header(){
    return (
			<div className={style.main}>
				<div className={style.langContainer}>
					<a>
						<Globe color='red' size={18} />
						EN
					</a>
					<a>
						<Globe color='red' size={18} />
						UA
					</a>
				</div>
				<div className={style.dataContainer}>
					<a>
						<AtSign color='red' size={18} />
						loboda.rom@gmail.com
					</a>
					<a>
						<Phone color='red' size={18} />
						+380 98 590 69 22
					</a>
				</div>
			</div>
		)

}
export default Header