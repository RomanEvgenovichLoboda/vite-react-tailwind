import { IProduct } from "./interface"

export const products: IProduct[] = [
	{
		id: 1,
		image: 'images/gus.png',
		name: 'Gus',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quis explicabo fuga libero nostrum, quo nulla soluta quisquam eligendi voluptatibus cumque rem cum sit quasi, inventore vitae id obcaecati amet!',
		price: 1000,
	},
	{
		id: 2,
		image: 'images/gus.png',
		name: 'Gus2',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quis explicabo fuga libero nostrum, quo nulla soluta quisquam eligendi voluptatibus cumque rem cum sit quasi, inventore vitae id obcaecati amet!',
		price: 1500,
	},
	{
		id: 3,
		image: 'images/gus.png',
		name: 'Gus3',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quis explicabo fuga libero nostrum, quo nulla soluta quisquam eligendi voluptatibus cumque rem cum sit quasi, inventore vitae id obcaecati amet!',
		price: 2000,
	}
]
export function getProductById(id:string):IProduct|undefined{
    return products.find(e => e.id.toString() == id)
}