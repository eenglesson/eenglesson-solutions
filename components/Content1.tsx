'use client';
import { Rocket, Settings } from 'lucide-react';
import Image from 'next/image';
import ColourfulText from './ui/colourful-text';
import { BorderBeam } from './magicui/border-beam';
import { TextEffect } from './ui/text-effect';
import { motion } from 'framer-motion';

const desktopVariants = {
  hidden: {
    y: 50,
    opacity: 0,
    filter: 'blur(12px)',
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      opacity: {
        type: 'spring',
        bounce: 0,
        duration: 1.5,
        delay: custom * 0.1,
      },
      y: {
        type: 'spring',
        bounce: 0,
        duration: 1.5,
        delay: custom * 0.1,
      },
      filter: {
        type: 'spring',
        bounce: 0,
        duration: 1.5,
        delay: custom * 0.1,
      },
    },
  }),
};

export default function Content1() {
  return (
    <section className='py-16 md:py-32'>
      <div className='mx-auto max-w-7xl space-y-8 px-6 md:space-y-16'>
        <TextEffect
          preset='fade-in-blur'
          speedSegment={0.3}
          as='h2'
          className='relative z-10 max-w-2xl text-4xl text-start font-medium lg:text-5xl'
        >
          The <ColourfulText text='E | Englesson' /> Ecosystem is evolving to
          power the future of digital innovation.
        </TextEffect>
        <div className='grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24'>
          <div className='relative space-y-4'>
            <TextEffect
              className='text-muted-foreground'
              preset='fade-in-blur'
              speedSegment={0.2}
              as='p'
              per='line'
            >
              More than a service, we offer a future-ready foundation for your
              digital success. Our ecosystem combines dynamic performance with
              innovative technology, ensuring your website adapts to tomorrow’s
              challenges.
            </TextEffect>
            <TextEffect
              className='text-muted-foreground'
              preset='fade-in-blur'
              speedSegment={0.3}
              as='p'
              per='line'
            >
              Experience unrivaled speed, flexibility, and cutting-edge
              solutions that turn bold ideas into real-world wins.
            </TextEffect>

            <div className='grid grid-cols-1 lg:grid-cols-2  gap-3 pt-6 sm:gap-4'>
              <div className='space-y-3'>
                <TextEffect
                  preset='fade-in-blur'
                  speedSegment={0.3}
                  as='h2'
                  per='word'
                  className='text-base font-medium flex items-center'
                >
                  <Settings className='size-5 mr-2' />
                  Adaptive Infrastructure
                </TextEffect>
                <TextEffect
                  className='text-muted-foreground'
                  preset='fade-in-blur'
                  speedSegment={0.3}
                  per='line'
                  as='p'
                >
                  Experience unrivaled speed and responsiveness that keeps your
                  business ahead in today’s fast-paced digital world.
                </TextEffect>
              </div>
              <div className='space-y-2'>
                <TextEffect
                  preset='fade-in-blur'
                  speedSegment={0.3}
                  as='h2'
                  per='word'
                  className='text-base font-medium flex items-center'
                >
                  <Rocket className='size-5 mr-2' />
                  Innovative Momentum
                </TextEffect>
                <TextEffect
                  className='text-muted-foreground'
                  preset='fade-in-blur'
                  speedSegment={0.3}
                  per='line'
                  as='p'
                >
                  Propel your business forward with cutting-edge solutions that
                  spark creativity and drive exponential growth—transforming
                  bold ideas into real-world success.
                </TextEffect>
              </div>
            </div>
          </div>
          <div className='relative mt-6 sm:mt-0 overflow-hidden'>
            <motion.div
              variants={desktopVariants}
              initial='hidden'
              whileInView='visible'
              custom={0} // Use 0 for the first card, 1 for the second, etc.
              viewport={{ once: true }}
              className='bg-linear-to-b aspect-67/34 relative rounded-2xl from-zinc-100 to-transparent p-px dark:from-zinc-700'
            >
              <Image
                src='/shadcndb.png'
                className='hidden rounded-[15px] dark:block'
                alt='payments illustration dark'
                width={1206}
                height={612}
              />
              <Image
                src='/shadcndbWhite.png'
                className='rounded-[15px] shadow dark:hidden'
                alt='payments illustration light'
                width={1206}
                height={612}
              />
              {/* Fade-out overlay */}
              <div
                aria-hidden
                className='bg-linear-to-b z-1 to-background absolute inset-0 from-transparent to-90% block'
              ></div>
              <BorderBeam
                duration={10}
                colorFrom='rgb(62, 169, 210)'
                colorTo='rgb(40, 112, 202)'
                size={150}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
