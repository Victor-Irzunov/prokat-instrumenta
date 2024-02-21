"use client"
import { Link as LinkScroll } from 'react-scroll';

export default function Footer() {
	return (
		<footer className="footer footer-center p-10 bg-primary text-base-content rounded" id='contacts'>
			<nav className="grid grid-flow-col gap-4">

				<LinkScroll
					to="main"
					smooth={true}
					offset={-100}
					duration={800}
					className="cursor-pointer link link-hover"
					rel="nofollow"
					href='#/'
				>
					Главная
				</LinkScroll>

				<LinkScroll
					to="catalog"
					smooth={true}
					offset={-100}
					duration={800}
					className="cursor-pointer link link-hover"
					rel="nofollow"
					href='#/'
				>
					Каталог
				</LinkScroll>

				<LinkScroll
					to="usloviya"
					smooth={true}
					offset={-100}
					duration={800}
					className="cursor-pointer link link-hover"
					rel="nofollow"
					href='#/'
				>
					Условия проката
				</LinkScroll>

			</nav>
			<nav>
				<h6 className='mb-1 w-[60vw] font-semibold uppercase'>
					Для аренды инструмента позвоните нам по номеру телефона:
				</h6>


				<div className='mt-2'>
					<a href='tel:80295235311' className='xz:text-xl sd:text-2xl font-bold'>
						+375 29 523-53-11
					</a>
				</div>
			</nav>

			<aside className='my-6'>
				<p className='text-xl'>
					Адрес: г. Молодечно ул. Якуба Колоса 78
				</p>
				{/* <p className=''>
					УНП 000000000
				</p> */}
			</aside>

			<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A07ec8bfecc28b03d54cab6974a4f7f2bf70d099936ccffa8c79981ce1deb4cd8&amp;source=constructor" width="100%" height="400" frameBorder="0"></iframe>

			<aside className="border-t pt-2">
				<p className='text-gray-800 xs:text-xs xz:text-[10px] font-light' >
					Copyright © 2024 | Разработка и Продвижение
					<a href='https://vi-tech.by' target='_blank' rel="noreferrer" className='text-sky-500 underline'> VI:TECH</a>.
					{' '}Информация на сайте не является публичной офертой и предоставляется исключительно в информационных целях.
				</p>
			</aside>
		</footer >
	)
}