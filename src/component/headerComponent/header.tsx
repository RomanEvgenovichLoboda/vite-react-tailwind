import style from './style.module.css'
import { Globe, AtSign, Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'
function Header(){
	const[lacale,setLocale]=useTranslation()
	
    return (
			<header className={style.main}>
				<div className={style.langContainer}>
					{setLocale.language == 'en' ? (
					<p onClick={() => setLocale.changeLanguage('uk')}>
						<Globe color='red' size={18} />
						UK
					</p>
					 ) : ( 
					<p onClick={() => setLocale.changeLanguage('en')}>
						<Globe color='red' size={18} />
						EN
					</p>
					 )} 
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
			</header>
		)

}
export default Header