import style from './style.module.css'
import { IProduct } from '../../../../service/interface'

function FindItem (product:IProduct) {
  return (
		<a  href={`/detail/${product.id}`} className={style.main}>
			<img src={`${product.image1}`} />
			<div>
				<h1>{product.name}</h1>
				<h1>{product.description}</h1>
				<h1>
					{new Intl.NumberFormat('ua-UA', {
						style: 'currency',
						currency: 'UAH',
					}).format(+product.price!)}
				</h1>
			</div>
		</a>
	)
}
export default FindItem
