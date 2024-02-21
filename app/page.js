import Advantages from "@/components/Advantages/Advantages";
import Catalog from "@/components/Catalog/Catalog";
import Otzyvy from "@/components/Otzyvy/Otzyvy";
import PrizyvDejstviyu from "@/components/Prizyv-k-dejstviyu/PrizyvDejstviyu";
import Сonditions from "@/components/Сonditions/Сonditions"

export default function Home() {
  return (
    <main className="overflow-x-hidden" id="main">
      <div className="hero min-h-screen relative" style={{ backgroundImage: 'url("/fon/fon.webp")' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center">
          <div className="sd:max-w-lg xz:max-w-full">
            <h1 className="mb-8 sd:text-7xl xz:text-5xl font-bold text-white/90">
              Прокат инструмента
            </h1>
            <p className="mb-12 text-neutral-content">
              Широкий выбор профессионального инструмента для строительства, ремонта и обслуживания. Мы предлагаем качественное оборудование по доступным ценам.
            </p>

            <a href='tel:80295235311' className='btn btn-primary btn-lg text-2xl rounded-none'>
              8 029 523-53-11
            </a>
          </div>
        </div>

        <div className='absolute bottom-3 left-1/2 -translate-x-1/2'>
          <p className='uppercase text-white text-xl font-light'>
            Молодечно
          </p>
        </div>
      </div>
      <Catalog />
      <Сonditions />
      <Otzyvy />
      <PrizyvDejstviyu />
      <Advantages />

      <section className='pb-10'>
        <div className='container mx-auto text-center'>
          <p className='mb-2 sd:text-xl xz:text-base font-semibold'>
            Нужен инструмент? Не теряйте времени на поиски и заботы о покупке дорогостоящего оборудования. Воспользуйтесь нашим прокатом строительного инструмента в Минске и получите доступ к широкому ассортименту высококачественного оборудования прямо сейчас!
          </p>
        </div>
      </section>


    </main>
  );
}
