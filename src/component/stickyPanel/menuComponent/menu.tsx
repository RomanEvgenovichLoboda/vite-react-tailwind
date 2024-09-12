import { ChevronDown} from 'lucide-react'
import style from './style.module.css'
import { MouseEvent } from 'react'


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

function Menu(){
    return (
			<>
				<div className={style.menu}>
					<button onClick={showMenuList} data-path='one' className='group'>
						<a>
							About the fund
							<ChevronDown />
						</a>
						<ul data-target='one' id='one' className='group-hover:block hidden'>
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
					<button
						onClick={showMenuList}
						data-path='two'
						className='group dropdown-toggle'
					>
						<a>
							Reports
							<ChevronDown />
						</a>

						<ul data-target='two' id='two' className='group-hover:block hidden'>
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
					<button
						onClick={showMenuList}
						data-path='three'
						className='group dropdown-toggle'
					>
						<a>
							Programs
							<ChevronDown/>
						</a>
						<ul
							data-target='three'
							id='three'
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
					<button
						onClick={showMenuList}
						data-path='four'
						className='group dropdown-toggle'
					>
						<a>
							Needs
							<ChevronDown />
						</a>
						<ul
							data-target='four'
							id='four'
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
					<button
						onClick={showMenuList}
						data-path='five'
						className='group dropdown-toggle'
					>
						<a>
							How to help
							<ChevronDown />
						</a>
						<ul
							data-target='five'
							id='five'
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
					<button data-path='six'>
						<a>News</a>
					</button>
					<button data-path='seven'>
						<a>Contacts</a>
					</button>
				</div>
				<div className={style.btnDiv}>
					<div className={style.redBtn}>Need help</div>
					<div className={style.blueBtn}>Donate</div>
				</div>
			</>
		)
}
export default Menu