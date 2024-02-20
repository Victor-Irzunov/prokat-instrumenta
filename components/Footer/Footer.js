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
					<a href='tel:8029' className='xz:text-xl sd:text-2xl font-bold'>
						+375 29 000-00-00
					</a>
				</div>
			</nav>

			<aside className='my-6'>
				<p className=''>
					Юр.адрес: г.Минск, ул. Минск 000
				</p>
				<p className=''>
					УНП 000000000
				</p>
			</aside>

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