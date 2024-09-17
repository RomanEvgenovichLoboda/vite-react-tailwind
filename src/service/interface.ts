export interface IProduct{
    id:number
    image:string
    name:string
    description:string
    price:number
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