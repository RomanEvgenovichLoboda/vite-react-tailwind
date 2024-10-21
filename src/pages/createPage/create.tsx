import { useState } from 'react'
import style from './style.module.css'
import { IProduct } from '../../service/interface'
import { create } from '../../service/fetchRepository'
import {  useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export function Create() {
	const[locale,setLocale]=useTranslation()
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	const [image1, setImage1] = useState<string | ArrayBuffer | null>()
	const [image2, setImage2] = useState<string | ArrayBuffer | null>()
	const [image3, setImage3] = useState<string | ArrayBuffer | null>()
	const [price, setPrice] = useState<number>()
	const navigate = useNavigate()
	const isCorrectData = ()=>{
		if (
			name.length > 0 &&
			name.length <= 50 &&
			description.length > 0 &&
			description.length <= 150 &&
			image1 &&
			image1?.toString().length > 0 &&
			image1?.toString().length <= 500000 &&
			image2 &&
			image2?.toString().length > 0 &&
			image2?.toString().length <= 500000 &&
			image3 &&
			image3?.toString().length > 0 &&
			image3?.toString().length <= 500000 &&
			price &&
			price > 0 &&
			!isNaN(price)
		) {
			return true
		} else {
			alert('Перевірте всі поля!')
			return false
		}
	}
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault() 
		if(isCorrectData()){
			let product: IProduct = {
				id: null,
				name,
				description,
				price,
				image1,
				image2,
				image3,
			}
			create(product).then(
				value => {
					console.log(value)
					navigate('/')
				},
				reason => console.error(reason)
			)
		}
	}
    return (
		<div className={style.main}>
			<h4>{locale("create_product")}</h4>
			<form action='/' onSubmit={e => onSubmit(e)}>
				<h1>{name.length > 0 && name.length <= 50 ? '' : '*'}</h1>
				<input
					name='name'
					type='text'
					placeholder={locale("name")}
					value={name}
					onChange={e => setName(e.target.value)}
				/>
				<h1>
					{description.length > 0 && description.length <= 150 ? '' : '*'}
				</h1>
				<textarea
					name='description'
					placeholder={locale("description")}
					onChange={e => setDescription(e.target.value)}
					value={description}
				/>
				<h1>
					{image1 &&
					image1?.toString().length > 0 &&
					image1?.toString().length <= 500000
						? ''
						: '*'}
				</h1>
				<input
					accept='image/png, image/jpeg'
					name='image1'
					className={style.file}
					type='file'
					onChange={e => {
						const reader = new FileReader()
						reader.onloadend = () => setImage1(reader.result)
						e.target.files instanceof FileList
							? reader.readAsDataURL(e.target.files[0])
							: console.error('image1 exception')
					}}
				/>
				<h1>
					{image2 &&
					image2?.toString().length > 0 &&
					image2?.toString().length <= 500000
						? ''
						: '*'}
				</h1>
				<input
					accept='image/png, image/jpeg'
					name='image2'
					className={style.file}
					type='file'
					onChange={e => {
						const reader = new FileReader()
						reader.onloadend = () => setImage2(reader.result)
						e.target.files instanceof FileList
							? reader.readAsDataURL(e.target.files[0])
							: console.error('image2 exception')
					}}
				/>
				<h1>
					{image3 &&
					image3?.toString().length > 0 &&
					image3?.toString().length <= 500000
						? ''
						: '*'}
				</h1>
				<input
					accept='image/png, image/jpeg'
					name='image3'
					className={style.file}
					type='file'
					onChange={e => {
						const reader = new FileReader()
						reader.onloadend = () => setImage3(reader.result)
						e.target.files instanceof FileList
							? reader.readAsDataURL(e.target.files[0])
							: console.error('image3 exception')
					}}
				/>
				<h1>{price && price > 0 && !isNaN(price) ? '' : '*'}</h1>
				<input
					name='price'
					type='number'
					placeholder={locale("price")}
					onChange={e => setPrice(parseFloat(e.target.value))}
				/>
				<div className={style.btn_div}>
					<button className={style.btn_purple} type='submit'>
						{locale("save")}
					</button>
					<button className={style.btn_red} onClick={() => navigate('/')}>
						{locale("cancel")}
					</button>
				</div>
			</form>
		</div>
	)
}
export default Create
