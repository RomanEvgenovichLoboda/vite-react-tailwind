export interface IProduct {
	id: number|null
	name: string
	description: string
	price: number | undefined
	image1: string | ArrayBuffer | null | undefined
	image2: string | ArrayBuffer | null | undefined
	image3: string | ArrayBuffer | null | undefined
}

export interface INavMenu{
	// [x: string]: any
    title:string
    menuItems?:IMenuItem[]
    link?:string
}

export interface IMenuItem{
    title:string
    link:string
}