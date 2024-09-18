import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductById} from "../../service/data"
import { IProduct } from "../../service/interface"
import style from './style.module.css'

function Detail(){
    const { id } = useParams()
	const [image,setImage] = useState<string|undefined>()
    const [product, setProduct] = useState<IProduct>()
    useEffect(()=>{
        if(!id) return
        setProduct(getProductById(id))
		setImage(product?.image[0])
    },[id])

    return product?.name ? (
		<div className={style.main}>
			<h1>{product.name}</h1>
			<div className={style.container}>
				<img className={style.genImg}
					src={image
						? `../../../public/${image}`
						: `../../../public/${product.image[0]}`
					}
					alt={`Image not found`}
				/>
				<div className={style.slidesContainer}>
					{product.image.map((e, k) => (
						<img
							className={style.slide}
							src={`../../../public/${e}`}
							key={k}
							onClick={() => setImage(e)}
						/>
					))}
				</div>
				<div className={style.description}>
					{product.description}
					<h1 className={style.price}>
						{new Intl.NumberFormat('ru-RU', {
							style: 'currency',
							currency: 'USD',
						}).format(+product.price)}
					</h1>
				</div>
			</div>
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