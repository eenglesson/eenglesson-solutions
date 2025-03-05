import Navbar from './components/Navbar';

import ContainerPage from './components/ContainerPage';
import SectionTitle from './components/SectionTitle';
import ServicesSection from './components/ServicesSection';
import RecurringClients from './components/ReccuringClients';
import Header from './components/Hero';

export default function Home() {
  return (
    <>
      <Navbar />
      <Header backgroundImage='/housetoUSe.avif' />
      {/* <section>
        <ContainerPage>
          <SectionTitle
            title={'Why Choose Us?'}
            paragraph={'What Sets Us Apart'}
          />
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center pt-16'>
            {infoCards.map((card, index) => (
              <InfoCard
                key={index}
                iconName={card.iconName} // Pass the actual icon component
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </ContainerPage>
      </section> */}
      <section className='my-40'>
        <ContainerPage>
          <RecurringClients />
        </ContainerPage>
      </section>
      <section className='bg-gray-50 mt-16'>
        <ContainerPage>
          <SectionTitle
            textSpeedParagraph={1.5}
            title='Our Services'
            paragraph='We craft clean, modern websites designed to elevate your brand and create meaningful digital experiences. '
          />
          <ServicesSection />
        </ContainerPage>
      </section>
    </>
  );
}
