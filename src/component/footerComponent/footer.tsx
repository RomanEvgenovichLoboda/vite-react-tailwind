import style from './style.module.css'
import { Facebook, Youtube, Instagram, Github} from 'lucide-react'

function Footer(){
    return (
			<footer className={style.main}>
				<a className='animate-pulse'>Loboda Roman | 2024</a>
				<nav className={style.iconsContainer}>
					<a>
						<Github />
					</a>
					<a>
						<Facebook />
					</a>
					<a>
						<Youtube />
					</a>
					<a>
						<Instagram />
					</a>
				</nav>
			</footer>
		)
}
export default Footer