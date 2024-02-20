import Image from "next/image";

const dataOtzyvy = [
	{
		id: 1,
		name: 'Драгун Павел',
		imgSrc: '/otzyvy/1.webp',
		alt: 'Отзыв клиента взявшего у нас в аренду инструмент',
		rating: 5,
		text: 'Очень доволен плиткорезом, взял на прокат для ремонта ванной комнаты. Очень удобно и быстро режет плитку, сэкономил много времени благодаря этому инструменту!'
	},
	{
		id: 2,
		name: 'Карачун Сергей',
		imgSrc: '/otzyvy/2.webp',
		alt: 'Отзыв клиента взявшего у нас в аренду инструмент',
		rating: 5,
		text: 'Отличный пылесос для строительных работ! Собирает пыль и мелкие осколки очень эффективно, что делает рабочую зону намного чище. Рекомендую всем!'
	},
	{
		id: 3,
		name: 'Фомич Алексей',
		imgSrc: '/otzyvy/3.webp',
		alt: 'Отзыв клиента взявшего у нас в аренду инструмент',
		rating: 5,
		text: 'Сварочный аппарат оправдал все мои ожидания! Прост в использовании, качественно выполняет сварочные работы. Сэкономил много времени и усилий благодаря этому инструменту.'
	},
	{
		id: 4,
		name: 'Грач Анатолий',
		imgSrc: '/otzyvy/4.webp',
		alt: 'Отзыв клиента взявшего у нас в аренду инструмент',
		rating: 5,
		text: 'Отличный генератор, помог мне обеспечить электропитанием строительный объект в отдаленном районе. Работает стабильно и надежно, без каких-либо сбоев. Очень доволен результатом!'
	},
	{
		id: 5,
		name: 'Грач Анатолий',
		imgSrc: '/otzyvy/5.webp',
		alt: 'Отзыв клиента взявшего у нас в аренду инструмент',
		rating: 5,
		text: 'Бетоносмеситель прекрасно справился со своей задачей! Помог мне замешать бетон для строительства фундамента. Прост в использовании и надежен в работе. Очень рекомендую этот инструмент!'
	}
];

const Otzyvy = () => {
	return (
		<section className='py-10 mx-7' id="otzyvy">
			<div className='container mx-auto'>
				<h6 className='text-center sd:text-4xl xz:text-3xl mb-8'>
					Отзывы наших клиентов
				</h6>

				<div className="carousel max-w-full h-auto">
					{dataOtzyvy.map((otzyv) => (
						<div key={otzyv.id} className="carousel-item flex sd:w-1/2 xz:w-full">
							<div className="avatar">
								<div className="w-16 h-16 rounded-full">
									<Image src={otzyv.imgSrc} alt={otzyv.alt} width={50} height={50} />
								</div>
							</div>
							<div className='w-2/3 ml-3 text-lg'>
								<p className='mb-2 font-semibold'>
									{otzyv.name}
								</p>
								<div className="rating mb-3">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" onChange={()=>{}} />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" onChange={()=>{}} />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" onChange={()=>{}}/>
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" onChange={()=>{}} />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" onChange={()=>{}} />
								</div>
								<p className='text-sm text-gray-600'>
									{otzyv.text}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Otzyvy;
