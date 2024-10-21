// import { useTranslation } from "react-i18next"
import { IMenuItem,INavMenu } from "./interface"
// const [locale,setLocale] = useTranslation()


export const toysMenuUk: IMenuItem[] = [
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

export const picturesMenuUk: IMenuItem[] = [
	{
		title: 'Бісером',
		link: '/',
	},
	{
		title: 'Нитками',
		link: '/',
	}
]

export const navMenuUk: INavMenu[] = [
	{
		title: 'Іграшки',
		menuItems: toysMenuUk,
	},
	{
		title: 'Картини',
		menuItems: picturesMenuUk,
	},
	{
		title: 'Про нас',
		link: '/about'
	},
	{
		title: 'Додати',
		link: '/create'
	}
]











export const toysMenu: IMenuItem[] = [
	{
		title: 'Little',
		link: '/',
	},
	{
		title: 'Medium',
		link: '/',
	},
	{
		title: 'Big',
		link: '/',
	},
]

export const picturesMenu: IMenuItem[] = [
	{
		title: 'Beads',
		link: '/',
	},
	{
		title: 'Threads',
		link: '/',
	},
]

export const navMenu: INavMenu[] = [
	{
		title: 'Toys',
		menuItems: toysMenu,
	},
	{
		title: 'Pictures',
		menuItems: picturesMenu,
	},
	{
		title: 'About us',
		link: '/about',
	},
	{
		title: 'Create',
		link: '/create',
	},
]