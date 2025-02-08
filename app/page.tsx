import { HeroParallaxDemo } from './components/HeroParallaxDemo';
import Navbar from './components/Navbar';
import InfoCard from './components/InfoCard';

import { infoCards } from './data/infoCards';
import ContainerPage from './components/ContainerPage';
import SectionTitle from './components/SectionTitle';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroParallaxDemo />

      <ContainerPage>
        <SectionTitle title={'Why Choose Us?'} paragraph={'Features'} />
        <section className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center my-16'>
          {infoCards.map((card, index) => (
            <InfoCard
              key={index}
              iconName={card.iconName} // Pass the actual icon component
              title={card.title}
              description={card.description}
            />
          ))}
        </section>
      </ContainerPage>
    </>
  );
}
