'use client';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function IphoneScroll() {
  // Get the scroll progress (a value between 0 and 1)
  const { scrollYProgress } = useScroll();
  // Map the scroll progress from 0–0.5 to a scale factor of 0–1
  const scaleY = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <div className='relative min-h-screen bg-gray-100'>
      {/* Page content above the animation */}
      <div className='p-10'>
        <h1 className='text-3xl font-bold'>iPhone 16e</h1>
        <p className='mt-4 text-gray-700'>
          Scroll down to see the white surface expand from below.
        </p>
      </div>
      {/* White surface that scales upward */}
      <motion.div
        style={{ scaleY }}
        className='absolute bottom-0 left-0 right-0 bg-white origin-bottom'
      >
        <div className='p-10'>
          <h2 className='text-2xl font-bold'>Product Details</h2>
          <p className='mt-2 text-gray-600'>
            Discover the innovative design and features of the new iPhone 16e.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
