'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';

import { Framer } from 'lucide-react';
import { TextEffect } from './ui/text-effect';

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

export default function Testimonials() {
  return (
    <section className='py-16 md:py-32 bg-gray-100 dark:bg-transparent'>
      <div className='mx-auto max-w-7xl space-y-8 px-4 md:space-y-16'>
        <div className='relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12'>
          <TextEffect
            preset='fade-in-blur'
            speedSegment={0.3}
            as='h2'
            className='text-4xl text-foreground font-medium lg:text-5xl'
          >
            Transforming Ideas into Digital Realities
          </TextEffect>
          <TextEffect
            className='text-foreground'
            preset='fade-in-blur'
            speedSegment={0.3}
            as='p'
            per='line'
          >
            We craft bespoke websites and digital solutions that drive growth
            and innovation. Our passion for design and technology has empowered
            businesses to elevate their online presence and achieve measurable
            success.
          </TextEffect>
        </div>

        <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2'>
          <motion.div
            variants={desktopVariants}
            initial='hidden'
            whileInView='visible'
            custom={0} // Use 0 for the first card, 1 for the second, etc.
            viewport={{ once: true }}
            className='grid grid-rows-auto gap-8 col-span-2 lg:row-span-2'
          >
            <Card className='flex w-full h-full flex-col'>
              <CardHeader>
                <div className='relative inline-block'>
                  <Framer
                    className='size-12'
                    style={{
                      stroke: 'url(#framerGradient)',
                      strokeWidth: 1.5,
                    }}
                  />
                  <svg width='0' height='0' className='absolute'>
                    <linearGradient
                      id='framerGradient'
                      gradientTransform='rotate(45)'
                    >
                      <stop offset='20%' stopColor='rgb(100,65,255)' />
                      <stop offset='50%' stopColor='rgb(218,0,171)' />
                      <stop offset='100%' stopColor='rgb(249,129,47)' />
                    </linearGradient>
                  </svg>
                </div>
              </CardHeader>
              <CardContent className='h-full flex flex-col justify-between'>
                <blockquote className='grid h-full grid-rows-auto gap-6'>
                  <p className='text-3xl font-medium italic'>
                    Englesson Solutions revolutionized our digital presence.
                    Their tailored approach and innovative designs streamlined
                    our development process, delivering a website that truly
                    reflects our brand.
                  </p>

                  <div className='grid grid-cols-[auto_1fr] items-end gap-3'>
                    <Avatar className='size-12'>
                      <AvatarImage
                        src='/woman1.jpg'
                        alt='Anna Maria'
                        height='400'
                        width='400'
                        loading='lazy'
                        className='object-cover object-top'
                      />
                      <AvatarFallback>AM</AvatarFallback>
                    </Avatar>

                    <div>
                      <p className='text-sm font-medium'>Anna Maria</p>
                      <span className='text-muted-foreground block text-sm'>
                        Ecommerce Manager
                      </span>
                    </div>
                  </div>
                </blockquote>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            variants={desktopVariants}
            initial='hidden'
            whileInView='visible'
            custom={1} // Use 0 for the first card, 1 for the second, etc.
            viewport={{ once: true }}
            className='col-span-2 sm:col-span-1 md:col-span-2 lg:col-span-1'
          >
            <Card className='flex w-full h-full flex-col'>
              <CardContent className='h-full pt-6 '>
                <blockquote className='grid h-full grid-rows-auto gap-6'>
                  <p className='text-base font-medium italic'>
                    Englesson Solutions exceeded our expectations by delivering
                    a website that is both visually compelling and exceptionally
                    user-friendly.
                  </p>

                  <div className='grid grid-cols-[auto_1fr] items-end gap-3'>
                    <Avatar className='size-12'>
                      <AvatarImage
                        src='man1.jpg'
                        alt='Jonathan Yombo'
                        height='400'
                        width='400'
                        loading='lazy'
                        className='object-cover object-top'
                      />
                      <AvatarFallback>JY</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className='text-sm font-medium'>Jonathan Yombo</p>
                      <span className='text-muted-foreground block text-sm'>
                        Software Engineer
                      </span>
                    </div>
                  </div>
                </blockquote>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            variants={desktopVariants}
            initial='hidden'
            whileInView='visible'
            custom={2} // Use 0 for the first card, 1 for the second, etc.
            viewport={{ once: true }}
            className='col-span-2 sm:col-span-1 lg:col-span-1 md:col-span-4 '
          >
            <Card className='flex w-full h-full flex-col'>
              <CardContent className='h-full pt-6'>
                <blockquote className='grid h-full grid-rows-auto gap-6'>
                  <p className='text-base font-medium italic'>
                    Collaborating with Englesson Solutions was a game-changer.
                    Their expert team delivered a visually stunning, highly
                    functional website that captured our vision perfectly.
                  </p>

                  <div className='grid items-center gap-3 [grid-template-columns:auto_1fr]'>
                    <Avatar className='size-12'>
                      <AvatarImage
                        src='man2.jpg'
                        alt='Yucel Faruksahan'
                        height='400'
                        width='400'
                        loading='lazy'
                        className='object-cover object-top'
                      />
                      <AvatarFallback>RP</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className='text-sm font-medium'>Rikard Petersson</p>
                      <span className='text-muted-foreground block text-sm'>
                        Creator
                      </span>
                    </div>
                  </div>
                </blockquote>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={desktopVariants}
            initial='hidden'
            whileInView='visible'
            custom={0} // Use 0 for the first card, 1 for the second, etc.
            viewport={{ once: true }}
            className='col-span-2  md:col-span-4 lg:col-span-2 '
          >
            <Card className='flex w-full h-full flex-col'>
              <CardContent className='h-full pt-6'>
                <blockquote className='grid h-full  grid-rows-auto gap-6'>
                  <p className='text-base font-medium italic'>
                    The team at Englesson Solutions truly understands digital
                    transformation. Their innovative, responsive solutions have
                    boosted our online engagement and accelerated our business
                    growth.
                  </p>

                  <div className='grid grid-cols-[auto_1fr] items-end gap-3'>
                    <Avatar className='size-12'>
                      <AvatarImage
                        src='woman2.jpg'
                        alt='Rodrigo Aguilar'
                        height='400'
                        width='400'
                        loading='lazy'
                        className='object-cover object-top'
                      />
                      <AvatarFallback>LN</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className='text-sm font-medium'>Lucie Nigel</p>
                      <span className='text-muted-foreground block text-sm'>
                        Creator
                      </span>
                    </div>
                  </div>
                </blockquote>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
