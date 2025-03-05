'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';

// The user wants bigger cards, text always visible on top, a horizontal carousel with Apple-like style,
// and we also need arrow buttons at the bottom that navigate the carousel. We also keep finger/mouse scroll.
// We'll keep the same test data, the same tests, but add new arrow-button tests.

// Example updated services data with background images.
const servicesData = [
  {
    title: 'Custom Web Solutions',
    description:
      'Tailored websites designed for your unique business needs, ensuring scalability and flexibility as you grow.',
    image: '/office.jpg',
  },
  {
    title: 'All-in-One Development',
    description:
      'Complete web development service: from design and development to testing and optimization, all under one roof.',
    image: '/richard-horvath-is8jWT-mvng-unsplash.jpg',
  },
  {
    title: 'Responsive & User-Focused',
    description:
      'Creating visually stunning, responsive websites that deliver seamless experiences across all devices.',
    image: '/office.jpg',
  },
  {
    title: 'Evolving with Your Needs',
    description:
      'Future-proof solutions that grow with your business, eliminating the need for frequent redesigns.',
    image: '/richard-horvath-is8jWT-mvng-unsplash.jpg',
  },
  {
    title: 'Performance & Optimization',
    description:
      'Lightning-fast, SEO-optimized websites built to maximize visibility and user engagement.',
    image: '/office.jpg',
  },
];

// Animations for container and items.
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

// Helper function to smoothly scroll.
const handleScroll = (
  ref: React.RefObject<HTMLDivElement | null>,
  offset: number
) => {
  if (ref.current) {
    ref.current.scrollTo({
      left: ref.current.scrollLeft + offset,
      behavior: 'smooth',
    });
  }
};

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className='w-full'>
      <motion.div
        className='w-full mx-auto '
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <motion.div
          ref={containerRef}
          className='flex space-x-6 overflow-x-scroll snap-x snap-mandatory'
          variants={itemVariants}
        >
          {servicesData.map((service, index) => (
            <div
              key={index}
              className='relative my-4 aspect-square w-[350px] sm:w-[400px] flex-shrink-0 snap-start overflow-hidden rounded-xl'
            >
              <Image
                src={service.image}
                alt={service.title}
                className='absolute inset-0 object-cover'
                fill
                priority
              />
              <ProgressiveBlur
                direction='top'
                className='pointer-events-none absolute top-0 left-0 h-[55%] w-full'
                blurLayers={3}
                blurIntensity={6}
              />
              <div className='absolute top-0 left-0'>
                <div className='flex flex-col items-start p-6'>
                  <p className='text-h5 font-medium text-white'>
                    {service.title}
                  </p>
                  <span className='mb-2 text-base text-gray-200'>
                    {service.description}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Apple-like navigation buttons at the bottom */}
        <div className='flex justify-end mt-6 space-x-4'>
          <button
            aria-label='Scroll left'
            onClick={() => handleScroll(containerRef, -400)}
            className='p-2 bg-gray-200/80 hover:bg-gray-300 rounded-full transition flex items-center'
          >
            <ChevronLeft size={24} />
          </button>
          <button
            aria-label='Scroll right'
            onClick={() => handleScroll(containerRef, 400)}
            className='p-2 bg-gray-200/80 hover:bg-gray-300 rounded-full transition flex items-center'
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
