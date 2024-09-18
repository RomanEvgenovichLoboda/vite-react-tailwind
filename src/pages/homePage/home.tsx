import style from './style.module.css'
import Card from '../../component/cardComponent/card'
import { products } from '../../service/data'

function Home() {

  return (
		<div className={style.main}>
			{products.map(product => (
				<Card key={product.id} {...product} />
			))}
		</div>
	)
}
export default Home
