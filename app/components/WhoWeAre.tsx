'use client';
import { motion } from 'framer-motion';
import { CircleArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function WhoWeAre() {
  return (
    <section className='mt-20 flex w-full flex-col gap-8 md:flex-row'>
      {/* Left Panel */}
      <div className='group flex flex-1 flex-col gap-4 rounded-lg border border-gray-100 bg-green-50/30 p-8'>
        <h2 className='font-playfair text-5xl'>Who we are</h2>
        <p className='mt-2'>
          We are a team of experienced digital consultants dedicated to helping
          businesses thrive in the digital era. From strategy to execution, we
          deliver solutions tailored to your unique needs.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='mt-6 flex justify-end gap-2'
        >
          <button className='group z-30 flex w-fit items-center gap-2 rounded-full py-3 text-small font-normal text-black transition-transform duration-200 hover:opacity-80 md:text-body'>
            About us
            <div className='transition-transform duration-200 group-hover:-rotate-45'>
              <CircleArrowRight className='h-[18px] w-[18px] md:h-[22px] md:w-[22px]' />
            </div>
          </button>
        </motion.div>
      </div>

      {/* Image Panel */}
      {/*
        We give the parent .relative with a desired aspect ratio (or min-h).
        The Image uses 'fill' + 'object-cover' so it fills that entire box.
      */}
      <div className='relative flex-1 aspect-[16/9]'>
        <Image src='/office.jpg' alt='Office' fill className=' object-cover' />
      </div>
      {/* Right Panel */}
      <div className='flex-1 rounded-lg bg-gray-50 p-8 text-start'>
        <div className='grid flex-row flex-wrap'>
          <aside className='flex flex-col p-2'>
            <span className='text-3xl'>24/7</span>
            <p>support available</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
