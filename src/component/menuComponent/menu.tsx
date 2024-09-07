import { Search } from 'lucide-react'
import style from './style.module.css'

function Menu(){
    return (
			<div className={style.main}>
				<img src='../../../public/images/pngwing.com.png'></img>

				<div className={style.menu}>
					<button data-path='one' className='group dropdown-toggle'>
						<a>
							About the fund
							<svg
								className='group-hover:text-sky-400'
								viewBox='0 0 20 20'
								fill='currentColor'
								aria-hidden='true'
							>
								<path
									fill-rule='evenodd'
									d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
									clip-rule='evenodd'
								/>
							</svg>
						</a>
						<ul
							data-target='one'
							id='one'
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
					<button data-path='two' className='group dropdown-toggle'>
						<a>
							Reports
							<svg
								className='group-hover:text-sky-400'
								viewBox='0 0 20 20'
								fill='currentColor'
								aria-hidden='true'
							>
								<path
									fill-rule='evenodd'
									d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
									clip-rule='evenodd'
								/>
							</svg>
						</a>

						<ul
							data-target='two'
							id='two'
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
					<button data-path='three' className='group dropdown-toggle'>
						<a>
							Programs
							<svg
								className='group-hover:text-sky-400'
								viewBox='0 0 20 20'
								fill='currentColor'
								aria-hidden='true'
							>
								<path
									fill-rule='evenodd'
									d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
									clip-rule='evenodd'
								/>
							</svg>
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
					<button data-path='four' className='group dropdown-toggle'>
						<a>
							Needs
							<svg
								className='group-hover:text-sky-400'
								viewBox='0 0 20 20'
								fill='currentColor'
								aria-hidden='true'
							>
								<path
									fill-rule='evenodd'
									d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
									clip-rule='evenodd'
								/>
							</svg>
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
					<button data-path='five' className='group dropdown-toggle'>
						<a>
							How to help
							<svg
								className='group-hover:text-sky-400'
								viewBox='0 0 20 20'
								fill='currentColor'
								aria-hidden='true'
							>
								<path
									fill-rule='evenodd'
									d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
									clip-rule='evenodd'
								/>
							</svg>
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
			</div>
		)
}
export default Menu