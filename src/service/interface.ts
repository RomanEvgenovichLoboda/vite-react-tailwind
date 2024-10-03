export interface IProduct {
	id: number
	name: string
	description: string
	price: number
	images: string[]
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