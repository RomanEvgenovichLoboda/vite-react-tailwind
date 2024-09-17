import style from './style.module.css'
import Card from '../../component/cardComponent/card'
import { products } from '../../service/data'

function Home() {

  return (
		<div className={style.main}>
			<div className={style.container}>
				{products.map(product=>(
					<Card key={product.id} {...product}/>
				))}
				
			</div>
		</div>
		
	)
}

export default Home
