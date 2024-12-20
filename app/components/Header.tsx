'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  backgroundImage: string;
}

export default function Header({ backgroundImage }: HeroProps) {
  return (
    <section
      className='relative w-screen h-screen bg-cover bg-center'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className='absolute inset-0 bg-black bg-opacity-60'></div>

      {/* Content */}
      <div className='absolute z-10 flex flex-col items-start justify-center h-full w-full px-4 md:px-8 gap-8 md:gap-12 text-white'>
        <div className='flex flex-col gap-2'>
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className='text-h3 sm:text-h2 md:text-[64px] font-semibold leading-[1.1]'
          >
            Let’s Create Your Masterpiece
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className='text-small max-w-[1200px] text-grey20 md:text-h6 md:w-2/3'
          >
            I create modern, minimalist websites that let your brand stand out,
            speak for itself, and connect with your audience through simplicity,
            clarity, and purpose-driven design-delivering trust and elevating
            your message for a lasting impression.
          </motion.p>
        </div>
        <motion.aside
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className='p-0 h-fit w-fit group flex gap-2 items-center text-grey20'
        >
          <button className='text-small items-center group flex md:text-h6 font-normal rounded-full transition-all duration-200 text-grey20 underline-animation underline-white'>
            Book an appointment
          </button>
        </motion.aside>
      </div>
    </section>
  );
}
