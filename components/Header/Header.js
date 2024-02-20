"use client"
import Image from 'next/image';
import { Link as LinkScroll } from 'react-scroll';


export default function Header() {

	return (
		<header className='bg-base-100 sticky top-0 z-50'>
			<div className='container mx-auto'>
				<div className="navbar px-0 relative py-1">
					<div className="navbar-start">
						<div className="dropdown">
							<label tabIndex={0} className="btn rounded-none lg:hidden mr-1">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
							</label>
							<ul tabIndex={0} className="dropdown-content mt-1 w-52 menu menu-compact p-2 bg-base-200 shadow rounded-box">
								<li>
									<LinkScroll
										to="main"
										smooth={true}
										offset={-100}
										duration={800}
										className="cursor-pointer"
										rel="nofollow"
										href='#/'
									>
										Главная
									</LinkScroll>
								</li>
								<li>
									<LinkScroll
										to="catalog"
										smooth={true}
										offset={-100}
										duration={800}
										className="cursor-pointer"
										rel="nofollow"
										href='#/'
									>
										Каталог
									</LinkScroll>
								</li>

								<li>
									<LinkScroll
										to="usloviya"
										smooth={true}
										offset={-100}
										duration={800}
										className="cursor-pointer"
										rel="nofollow"
										href='#/'
									>
										Условия проката
									</LinkScroll>
								</li>
								<li>
									<LinkScroll
										to="otzyvy"
										smooth={true}
										offset={-100}
										duration={800}
										className="cursor-pointer"
										rel="nofollow"
										href='#/'
									>
										Отзывы
									</LinkScroll>
								</li>
								<li>
									<LinkScroll
										to="preimushestva"
										smooth={true}
										offset={-100}
										duration={800}
										className="cursor-pointer"
										rel="nofollow"
										href='#/'
									>
										Преимущества
									</LinkScroll>
								</li>
								<li>
									<LinkScroll
										to="contacts"
										smooth={true}
										offset={-100}
										duration={800}
										className="cursor-pointer"
										rel="nofollow"
										href='#/'
									>
										Контакты
									</LinkScroll>
								</li>
							</ul>
						</div>
						<img src='/logo/logo3.webp' alt='логотип'
							className='sd:w-24 xz:w-20 xz:ml-2 sd:ml-0'
						/>
					</div>
					<div className="navbar-center hidden lg:flex">
						<ul className="menu menu-horizontal p-0  text-lg">
							<li>
								<LinkScroll
									to="main"
									smooth={true}
									offset={-100}
									duration={800}
									className="cursor-pointer"
									rel="nofollow"
									href='#/'
								>
									Главная
								</LinkScroll>
							</li>
							<li>
								<LinkScroll
									to="catalog"
									smooth={true}
									offset={-100}
									duration={800}
									className="cursor-pointer"
									rel="nofollow"
									href='#/'
								>
									Каталог
								</LinkScroll>
							</li>

							<li>
								<LinkScroll
									to="usloviya"
									smooth={true}
									offset={-100}
									duration={800}
									className="cursor-pointer"
									rel="nofollow"
									href='#/'
								>
									Условия проката
								</LinkScroll>
							</li>
							<li>
								<LinkScroll
									to="otzyvy"
									smooth={true}
									offset={-100}
									duration={800}
									className="cursor-pointer"
									rel="nofollow"
									href='#/'
								>
									Отзывы
								</LinkScroll>
							</li>
							<li>
								<LinkScroll
									to="contacts"
									smooth={true}
									offset={-100}
									duration={800}
									className="cursor-pointer"
									rel="nofollow"
									href='#/'
								>
									Контакты
								</LinkScroll>
							</li>
						</ul>
					</div>
					<div className="navbar-end">


						<a href='tel:8029' className='btn btn-primary rounded-none'>
							8 029 000-00-00
						</a>
					</div>
				</div>
			</div>
		</header>
	)
}