import { HeroParallaxDemo } from './components/HeroParallaxDemo';
import Navbar from './components/Navbar';
import InfoCard from './components/InfoCard';

import { infoCards } from './data/infoCards';
import ContainerPage from './components/ContainerPage';
import { InfiniteMovingCards } from './components/InfinteMovingCards';
import {
  SiFramer,
  SiJavascript,
  SiLucide,
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';

const items = [
  {
    icon: <SiReact size={24} className='text-[#61DAFB]' />,
    title: 'React',
    href: 'https://react.dev',
  },
  {
    icon: <SiVercel size={24} className='text-[#000000]' />,
    title: 'Vercel',
    href: 'https://vercel.com',
  },
  {
    icon: <SiTypescript size={24} className='text-[#3178C6]' />,
    title: 'TypeScript',
    href: 'https://www.typescriptlang.org',
  },
  {
    icon: <SiNextdotjs size={24} className='text-[#000000]' />,
    title: 'Next.js',
    href: 'https://nextjs.org',
  },
  {
    icon: <SiJavascript size={24} className='text-[#F7DF1E]' />,
    title: 'JavaScript',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    icon: <SiFramer size={24} className='text-[#000000]' />,
    title: 'Framer Motion',
    href: 'https://www.framer.com/motion',
  },
  {
    icon: <SiTailwindcss size={24} className='text-[#06B6D4]' />,
    title: 'Tailwind CSS',
    href: 'https://tailwindcss.com',
  },
  {
    icon: <SiLucide size={24} className='text-[#000000]' />,
    title: 'Lucide Icons',
    href: 'https://lucide.dev',
  },
  {
    icon: <SiMongodb size={24} className='text-[#47A248]' />,
    title: 'MongoDB',
    href: 'https://www.mongodb.com',
  },
];

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
        <section className=''>
          <div className='rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden'>
            <InfiniteMovingCards items={items} direction='right' speed='slow' />
          </div>
        </section>
      </ContainerPage>
    </>
  );
}
