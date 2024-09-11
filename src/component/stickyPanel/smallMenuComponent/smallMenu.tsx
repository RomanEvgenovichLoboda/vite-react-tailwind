import { ChevronDown, X } from 'lucide-react'
import { MouseEvent } from 'react'
import style from './style.module.css'



const showMenuList = (e: MouseEvent<HTMLButtonElement>) => {
	const button = e.target as HTMLButtonElement
	const path = button.parentElement?.dataset.path
	console.log(path)

	const menu = document.getElementById(path as string)
	if (menu?.classList.contains('hidden') === true) {
		menu.classList.remove('hidden')
		menu.classList.add('block')
	} else {
		menu?.classList.remove('block')
		menu?.classList.add('hidden')
	}
}


const closeMenu = (e: MouseEvent<SVGSVGElement>) => {
	const menu = document.getElementById('menuAbsolute')
	console.log('close')
	menu?.classList.remove('block')
}
function SmallMenu(){
    return (
			<div className={style.menuAbsolute} id='menuAbsolute'>
				<div className={style.head}>
					<X onClick={closeMenu} className={style.closeIcon} size={40} id='closeMenu' />
				</div>
				<div className={style.menuS}>
					<button onClick={showMenuList} data-path='oneS' className='group'>
						<p>
							About the fund
							<ChevronDown />
						</p>
						<ul
							data-target='oneS'
							id='oneS'
							className='group-hover:block hidden'
						>
							<li>
								<a>About us1</a>
							</li>
							<li>
								<a>About us1</a>
							</li>
							<li>
								<a>About us1</a>
							</li>
						</ul>
					</button>
					<button onClick={showMenuList} data-path='twoS' className='group'>
						<p>
							Reports
							<ChevronDown />
						</p>

						<ul
							data-target='twoS'
							id='twoS'
							className='group-hover:block hidden'
						>
							<li>
								<a>Reports1</a>
							</li>
							<li>
								<a>Reports1</a>
							</li>
							<li>
								<a>Reports1</a>
							</li>
							<li>
								<a>Reports1</a>
							</li>
						</ul>
					</button>
					<button onClick={showMenuList} data-path='threeS' className='group'>
						<p>
							Programs
							<ChevronDown />
						</p>
						<ul
							data-target='threeS'
							id='threeS'
							className='group-hover:block hidden'
						>
							<li>
								<a>Programs1</a>
							</li>
							<li>
								<a>Programs1</a>
							</li>
							<li>
								<a>Programs1</a>
							</li>
							<li>
								<a>Programs1</a>
							</li>
						</ul>
					</button>
					<button onClick={showMenuList} data-path='fourS' className='group'>
						<p>
							Needs
							<ChevronDown />
						</p>
						<ul
							data-target='fourS'
							id='fourS'
							className='group-hover:block hidden'
						>
							<li>
								<a>Needs1</a>
							</li>
							<li>
								<a>Needs1</a>
							</li>
							<li>
								<a>Needs1</a>
							</li>
							<li>
								<a>Needs1</a>
							</li>
						</ul>
					</button>
					<button onClick={showMenuList} data-path='fiveS' className='group'>
						<p>
							How to help
							<ChevronDown />
						</p>
						<ul
							data-target='fiveS'
							id='fiveS'
							className='group-hover:block hidden'
						>
							<li>
								<a>How to help1</a>
							</li>
							<li>
								<a>How to help1</a>
							</li>
							<li>
								<a>How to help1</a>
							</li>
							<li>
								<a>How to help1</a>
							</li>
						</ul>
					</button>
					<button data-path='sixS'>
						<p>News</p>
					</button>
					<button data-path='sevenS'>
						<p>Contacts</p>
					</button>
					<div className={style.btnDiv}>
						<div className={style.redBtn}>Need help</div>
						<div className={style.blueBtn}>Donate</div>
					</div>
				</div>
			</div>
		)
}
export default SmallMenu