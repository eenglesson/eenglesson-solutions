import Content1 from '@/components/Content1';
import CTA from '@/components/CTA';
import FeaturesSection from '@/components/FeaturesSection';
import FooterSection from '@/components/Footer';

import HeroSection from '@/components/hero-section';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className='w-[100vw] h-fit overflow-x-hidden'>
        <FeaturesSection />
        <Content1 />
        <Testimonials />
        <CTA />
        <FooterSection />
      </section>
    </>
  );
}
