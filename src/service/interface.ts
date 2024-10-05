export interface IProduct {
	id: number
	name: string
	description: string
	price: number
	image1: string
	image2: string
	image3: string
}

export interface INavMenu{
    title:string
    menuItems?:IMenuItem[]
    link?:string
}

export interface IMenuItem{
    title:string
    link:string
}