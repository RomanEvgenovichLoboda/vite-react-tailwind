import style from './style.module.css'
import Card from '../../component/cardComponent/card'
import { getAll } from '../../service/fetchRepository'
import { useEffect, useState } from 'react'
import { IProduct } from '../../service/interface'

function Home() {
	const[products,setProducts] = useState<IProduct[]|undefined>()
	useEffect(()=>{
		getAll().then((value)=> setProducts(value),
  		(reason)=> console.log(reason),);
	},[])


    return (
		products&&
		<div className={style.main}>
			{products.map(product => (
				<Card key={product.id} {...product} />
			))}
		</div>
	)
}
export default Home
