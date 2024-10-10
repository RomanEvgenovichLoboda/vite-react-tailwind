import { useState } from 'react'
import style from './style.module.css'
import { IProduct } from '../../service/interface'
import { create } from '../../service/fetchRepository'
import {  useNavigate } from 'react-router-dom'

export function Create() {
        const [name, setName] = useState('')
        const [description, setDescription] = useState('')
        const [image1, setImage1] = useState<string | ArrayBuffer | null>()
        const [image2, setImage2] = useState<string | ArrayBuffer | null>()
        const [image3, setImage3] = useState<string | ArrayBuffer | null>()
        const [price, setPrice] = useState<number>()
        
        const navigate = useNavigate()

        const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
                    e.preventDefault() 
					let product: IProduct = {
                        id : null,
						name,
						description,
						price,
						image1,
						image2,
						image3,
					}
					console.log(product)
                    create(product).then(
                        (value)=>{
                            console.log(value)
                            navigate('/')
                        },
                        (reason)=> console.error(reason)
                        
                    )
                navigate
				}
  return (
		<div className={style.main}>
			<h4>Додати продукт</h4>
			<form action='/' onSubmit={e => onSubmit(e)}>
				<input
					name='name'
					type='text'
					placeholder='Імʼя'
					onChange={e => setName(e.target.value)}
				/>
				<textarea
					name='description'
					placeholder='Опис'
					onChange={e => setDescription(e.target.value)}
				/>
				<input
					name='image1'
					type='file'
					onChange={e => {
						const reader = new FileReader()
						reader.onloadend = () => setImage1(reader.result)
						e.target.files instanceof FileList
							? reader.readAsDataURL(e.target.files[0])
							: 'handle exception'
					}}
				/>
				<input
					name='image2'
					type='file'
					onChange={e => {
						const reader = new FileReader()
						reader.onloadend = () => setImage2(reader.result)
						e.target.files instanceof FileList
							? reader.readAsDataURL(e.target.files[0])
							: 'handle exception'
					}}
				/>
				<input
					name='image3'
					type='file'
					onChange={e => {
						const reader = new FileReader()
						reader.onloadend = () => setImage3(reader.result)
						e.target.files instanceof FileList
							? reader.readAsDataURL(e.target.files[0])
							: 'handle exception'
					}}
				/>
				<input
					name='price'
					type='text'
					placeholder='Ціна'
					onChange={e => setPrice(parseFloat(e.target.value))}
				/>
				<button type='submit'>Зберегти</button>
			</form>
		</div>
	)
}
export default Create
