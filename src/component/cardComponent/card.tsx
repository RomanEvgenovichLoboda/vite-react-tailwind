import style from './style.module.css'
import { IProduct } from '../../service/interface'
import {motion} from 'framer-motion'
import { useTranslation } from 'react-i18next'

function Card(product:IProduct){
	const[locale,setLocale]=useTranslation()
    return (
			<motion.div
				className={style.main}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 1.05 }}
			>
				{/* <img
					src={`data:image/gif;base64,${product.image1}`}
					alt='Image not found'
				></img> */}
				<img
					src={product.image1?.toString()}
					alt='Image not found'
				></img>
				<div className={style.name}>{product.name}</div>
				<div className={style.description} title={product.description}>
					{product.description}
				</div>
				<div>
					{new Intl.NumberFormat('ua-UA', {
						style: 'currency',
						currency: 'UAH',
					}).format(+product.price!)}
				</div>
				<a className={style.link} href={`/detail/${product.id}`}>
					{locale("detail")}
				</a>
			</motion.div>
		)
}
export default Card