import { data } from "@/constans/dataCatalog";
import Image from "next/image";

const Catalog = () => {
	return (
		<section className='bg-slate-200 py-16' id="catalog">
			<div className='container mx-auto'>
				<h2 className='sd:text-6xl xz:text-4xl font-semibold text-center'>
					Каталог
				</h2>
				<h3 className='uppercase text-center mt-3'>
					инструмент в аренду
				</h3>
				<div className='mt-9 grid grid-cols-2 gap-6 xz:grid-cols-1 sd:grid-cols-4'>
					{data.map(item => (
						<div key={item.id} className='bg-white p-4 rounded-lg'>
							<img src={item.img} alt={item.alt} className='w-20 h-20 mb-4' />
							<h4 className='text-lg font-semibold'>{item.title}</h4>
						</div>
					))}
				</div>
				<h5 className='mt-14 text-xl mb-4 font-semibold'>
					Цена на прокат инструмента в Минске
				</h5>
				<p className=''>
					Для уточнения стоимости проката инструмента в Молодечно, пожалуйста, свяжитесь с нашими специалистами по указанному телефону. Обратите внимание, что услуга проката предоставляется по предварительной оплате. Мы рады предложить посуточную аренду электроинструмента в Молодечно и имеем гибкую систему скидок для клиентов, арендующих инструмент на длительный срок.
				</p>

				<div className='mt-16 flex flex-wrap justify-center items-center'>
					<div className='xz:w-full sd:w-1/5 px-2 mb-4'>
						<Image src='/brand/1.webp' alt='Фирма инструмента для проката' width={720} height={720} />
					</div>
					<div className='xz:w-full sd:w-1/5 px-2 mb-4'>
						<Image src='/brand/2.webp' alt='Фирма инструмента для проката' width={720} height={720} />
					</div>
					<div className='xz:w-full sd:w-1/5 px-2 mb-4'>
						<Image src='/brand/3.webp' alt='Фирма инструмента для проката' width={720} height={720} />
					</div>
					<div className='xz:w-full sd:w-1/5 px-2 mb-4'>
						<Image src='/brand/4.webp' alt='Фирма инструмента для проката' width={720} height={720} />
					</div>
					<div className='xz:w-full sd:w-1/5 px-2 mb-4'>
						<Image src='/brand/5.webp' alt='Фирма инструмента для проката' width={720} height={720} />
					</div>
				</div>

			</div>
		</section>
	);
}

export default Catalog;
