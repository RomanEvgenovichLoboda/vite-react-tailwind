import style from './style.module.css'
import { IProduct } from '../../service/interface'
import { Link } from 'react-router-dom'

function Card(product:IProduct){
    return (
			<div className={style.main}>
				<img className='h-64' src={product.image} alt=''></img>
				<div>{product.name}</div>
				<div className={style.description} title={product.description}>
					{product.description}
				</div>
				<div>
					{new Intl.NumberFormat('ua-UA', {
						style: 'currency',
						currency: 'UAH',
					}).format(+product.price)}
				</div>
				<Link className={style.link} to={`/detail/${product.id}`}>
					Опис
				</Link>
			</div>
		)
}
export default Card