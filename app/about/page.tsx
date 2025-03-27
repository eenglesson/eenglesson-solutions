import Navbar from '@/components/Navbar';
import AboutHeader from '@/components/AboutHeader';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <div className='w-[100vw] h-full mt-32 -mb-40 sm:mt-40 max-w-7xl mx-auto px-4 overflow-x-hidden'>
        <AboutHeader />
      </div>
      <Footer />
    </>
  );
}
