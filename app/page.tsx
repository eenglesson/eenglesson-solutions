'use client';

import Navbar from './components/Navbar';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import HeroBeast from './components/HeroBeast';

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <HeroParallaxDemo /> */}
      <div>
        <HeroBeast backgroundImage='/mountain.jpg' />
      </div>
      <section className='w-full py-24 bg-gradient-to-b from-white to-gray-100'>
        <div className='container max-w-5xl mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className='text-center'
          >
            <div className='inline-flex items-center gap-2 mb-4'>
              <Sparkles className='h-5 w-5 text-red-500' />
              <span className='text-sm font-medium text-red-500'>
                Coming Soon
              </span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              More Awesome Features on the Way
            </h2>
            <p className='text-gray-600 text-xl max-w-2xl mx-auto mb-8'>
              We&apos;re working on exciting new additions to enhance your
              experience. Stay tuned for updates as we continue to evolve and
              grow.
            </p>
            <motion.button
              className='group inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors'
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Notified
              <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
