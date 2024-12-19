'use client';
import React from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { FlipWords } from './flipWords';

const words = ['Future', 'Dream', 'Identity', 'Brand', 'Vision'];

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 10);
  const secondRow = products.slice(3, 13);
  const thirdRow = products.slice(6, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [-1000, -2000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [30, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.3, 0.85]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 100]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className='h-fit py-40 overflow-hidden bg-black/95 antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]'
    >
      <div className='relative z-10'>
        <Header />
      </div>
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className='mt-[500px]'
      >
        <motion.div className='flex flex-row-reverse space-x-reverse space-x-12 mb-12'>
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className='flex flex-row mb-12 space-x-12 '>
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className='flex flex-row-reverse space-x-reverse space-x-12'>
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className='max-w-7xl pl-8 flex flex-col gap-4 absolute py-20 md:py-40 px-4 w-full left-0 top-0'>
      <motion.h1
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className='text-h3 sm:text-h2 md:text-[64px] h-fit text-neutral-300 font-bold md:leading-[1] leading-[1]'
      >
        Let’s Create Your <br className='block sm:hidden' />{' '}
        <FlipWords words={words} />
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='text-small max-w-[1200px] text-white md:text-h6 md:w-2/3'
      >
        I create modern, minimalist websites that let your brand stand out,
        speak for itself, and connect with your audience through simplicity,
        clarity, and purpose-driven design-delivering trust and elevating your
        message for a lasting impression.
      </motion.p>
      <motion.aside
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className='p-0 h-fit w-fit flex gap-2 items-center text-white mt-6'
      >
        <button className='group text-small items-center flex md:text-h6 hover:bg-white transition-transform duration-200 hover:text-black sm:font-normal z-30 rounded-full border py-2 px-4 gap-2'>
          Book an appointment
          <div className='transition-transform duration-200 group-hover:rotate-45'>
            <ArrowUpRight className='sm:w-[22px] sm:h-[22px] w-[18px] h-[18px]' />
          </div>
        </button>
      </motion.aside>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className='group/product h-64 sm:h-96 w-[22rem] sm:w-[30rem] relative flex-shrink-0'
    >
      <Link
        href={product.link}
        className='block group-hover/product:shadow-2xl '
      >
        <Image
          src={product.thumbnail}
          height='600'
          width='600'
          className='object-cover object-left-top absolute h-full w-full inset-0'
          alt={product.title}
        />
      </Link>
      <div className='absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none'></div>
      <h2 className='absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white'>
        {product.title}
      </h2>
    </motion.div>
  );
};
