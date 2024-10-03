import { IMenuItem,INavMenu } from "./interface"


export const toysMenu: IMenuItem[] = [
	{
		title: 'Маленькі',
		link: '/',
	},
	{
		title: 'Середні',
		link: '/',
	},
	{
		title: 'Великі',
		link: '/',
	}
]

export const picturesMenu: IMenuItem[] = [
	{
		title: 'Бісером',
		link: '/',
	},
	{
		title: 'Нитками',
		link: '/',
	}
]

export const navMenu: INavMenu[] = [
	{
		title: 'Іграшки',
		menuItems: toysMenu,
	},
	{
		title: 'Картини',
		menuItems: picturesMenu,
	},
	{
		title: 'Про нас',
		link:'/about'
	}
]
