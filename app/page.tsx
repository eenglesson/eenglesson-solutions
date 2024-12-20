import { HeroParallaxDemo } from './components/HeroParallaxDemo';
import Navbar from './components/Navbar';
import InfoCard from './components/InfoCard';

import { infoCards } from './data/infoCards';
import ContainerPage from './components/ContainerPage';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroParallaxDemo />

      <ContainerPage>
        <div className='w-full flex flex-col justify-center items-center'>
          <h2 className='text-h3 sm:text-h2 font-semibold text-center mt-16'>
            Why Choose Us?
          </h2>
          <p className='text-gray-500'>Features</p>
        </div>
        <section className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center my-16'>
          {infoCards.map((card, index) => (
            <InfoCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </section>
        <section className='p-10'></section>
      </ContainerPage>
    </>
  );
}
