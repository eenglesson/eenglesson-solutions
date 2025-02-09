'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { AnimatedNumber } from '@/components/ui/animated-number';

const proud = [
  {
    number: 7,
    description:
      'Businesses that have trusted us to bring their online vision to life.',
  },
  {
    number: 10,
    description:
      'Completed websites, platforms, and digital solutions, each crafted with care and precision.',
  },
  {
    number: 12,
    description:
      'A diverse portfolio of projects that demonstrate our capability and commitment.',
  },
  {
    number: 3,
    description: 'Years of expertise in building modern, responsive websites.',
  },
];

export default function RecurringClients() {
  const ref = useRef(null);
  // Trigger inView only once, when 20% of the section is visible
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref} // Attach the ref to the section to detect when it's in view
      className='w-full flex flex-col md:flex-row flex-wrap items-stretch bg-transparent border shadow-lg rounded-2xl h-auto border-gray-200 p-6'
    >
      {proud.map((obj, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.2,
            type: 'spring',
            stiffness: 60,
            damping: 20,
            delay: index * 0.1,
          }}
          viewport={{ once: true, amount: 0.2 }}
          className='flex flex-col justify-between md:items-center w-full md:w-1/2 lg:w-1/4 text-left p-4 sm:p-8 h-full'
        >
          <div>
            <AnimatedNumber
              className='font-semibold text-h2'
              springOptions={{
                bounce: 0,
                duration: 5000,
              }}
              value={isInView ? obj.number : 0}
            />
            <p className='text-body text-gray-500'>{obj.description}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
