import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductById} from "../../service/data"
import { IProduct } from "../../service/interface"
import style from './style.module.css'


function Detail(){
    const { id } = useParams()
    const [product, setProduct] = useState<IProduct>()
    useEffect(()=>{
        if(!id) return
        setProduct(getProductById(id))
    },[id])
// console.log(products.find(e => e.id.toString() == id))
    return product?.name ? (
			<div className={style.main}>
				<h1>{product.name}</h1>
				<img src={`../../../public/${product.image}`}/>
				<h2>{product.description}</h2>
				<h1>
					{new Intl.NumberFormat('ru-RU', {
						style: 'currency',
						currency: 'USD',
					}).format(+product.price)}
				</h1>
			</div>
		) : (
			<div
				className=' flex items-center justify-center text-6xl text-red-700'
				style={{ minHeight: '1000px' }}
			>
				Product Not Found !
			</div>
		)
    
}
export default Detail