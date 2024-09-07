import style from './style.module.css'
import { Facebook, Youtube, Instagram, Github} from 'lucide-react'

function Footer(){
    return (
			<div className={style.main}>
				<a className='animate-pulse'>Loboda Roman | 2024</a>
				<div className={style.iconsContainer}>
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
				</div>
			</div>
		)
}
export default Footer