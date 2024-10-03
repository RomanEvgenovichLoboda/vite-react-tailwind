import style from './style.module.css'
import { IProduct } from '../../service/interface'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

function Card(product:IProduct){
    return (
			<motion.div
				className={style.main}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 1.05 }}
			>
				<img src={`data:image/gif;base64,${product.images[0]}`} alt='Image not found'></img>
				<div className={style.name}>{product.name}</div>
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
			</motion.div>
		)
}
export default Card