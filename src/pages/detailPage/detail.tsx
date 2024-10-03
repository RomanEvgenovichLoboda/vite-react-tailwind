import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getById } from "../../service/fetchRepository"
import { IProduct } from "../../service/interface"
import style from './style.module.css'
import {motion} from 'framer-motion'

const textAnimation ={
	hidden:{
		x: 100,
		opacity: 0,
	},
	visible:(custom:number) => ({
		x: 0,
		opacity: 1,
		transition: {delay: custom * 0.2},
	})
}

function Detail(){
    const { id } = useParams()
	const [image,setImage] = useState<string|undefined>()
    const [product, setProduct] = useState<IProduct>()
    useEffect(()=>{
        if(!id) return
		getById(parseInt(id)).then(
			value => setProduct(value),
			reason => console.log(reason)
		)
		setImage(product?.images[0])
    },[id])

    return product?.images[0] ? (
			<motion.div initial='hidden' whileInView='visible' className={style.main}>
				<motion.h1 custom={1} variants={textAnimation}>
					{product.name}
				</motion.h1>
				<div className={style.container}>
					<motion.img
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.2 }}
						className={style.genImg}
						src={
							image
								? `data:image/gif;base64,${image}`
								: `data:image/gif;base64,${product.images[0]}`
						}
						alt={`Image not found`}
					/>
					<div className={style.slidesContainer}>
						{product.images.map((e, k) => (
							<motion.img
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className={style.slide}
								src={`data:image/gif;base64,${e}`}
								key={k}
								onClick={() => setImage(e)}
							/>
						))}
					</div>
					<div className={style.description}>
						<motion.p custom={2} variants={textAnimation}>
							{product.description}
						</motion.p>
						<motion.h1
							custom={3}
							variants={textAnimation}
							className={style.price}
						>
							{new Intl.NumberFormat('ru-RU', {
								style: 'currency',
								currency: 'USD',
							}).format(+product.price)}
						</motion.h1>
					</div>
				</div>
			</motion.div>
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