import style from './style.module.css'

function Card(){
    return (
			<div className={style.main}>
				<img className='h-64' src='../../../public/images/gus.png'></img>
				<div>Gus</div>
				<div
					className={style.description}
					title='
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quis
					explicabo fuga libero nostrum, quo nulla soluta quisquam eligendi
					voluptatibus cumque rem cum sit quasi, inventore vitae id obcaecati
					amet!
                '
				>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quis
					explicabo fuga libero nostrum, quo nulla soluta quisquam eligendi
					voluptatibus cumque rem cum sit quasi, inventore vitae id obcaecati
					amet!
				</div>
				<div>
					{new Intl.NumberFormat('ru-RU', {
						style: 'currency',
						currency: 'USD',
					}).format(+'1000')}
				</div>
				<button>Buy</button>
			</div>
		)
}
export default Card