'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TextEffect } from '@/components/ui/text-effect';
import { CircleArrowRight } from 'lucide-react';

import Image from 'next/image';
import { InfiniteSlider } from '@/components/ui/infinite-slider';

export default function HeroBeast({
  backgroundImage,
}: {
  backgroundImage: string;
}) {
  const { scrollY } = useScroll();
  const [showAlwaysAvailable, setShowAlwaysAvailable] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setShowAlwaysAvailable(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const containerWidth = useTransform(scrollY, [0, 150], ['85%', '100%']);
  const radius = useTransform(scrollY, [0, 200], [24, 0]);
  const opacityContainer = useTransform(scrollY, [0, 100], [0.9, 1]);

  function Background({ backgroundImage }: { backgroundImage: string }) {
    const opacitybg = useTransform(scrollY, [0, 300], [1, 0.3]);
    return (
      <motion.div
        className='absolute inset-0'
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          opacity: opacitybg,
        }}
      />
    );
  }

  return (
    <>
      {/* HERO SECTION */}
      <div className='relative h-[120vh] bg-black'>
        <Background backgroundImage={backgroundImage} />
        <motion.div
          layout
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 0.4 }}
          className='absolute hero bottom-0 left-0 right-0 mx-auto pt-6 bg-white'
          style={{
            height: '500px',
            width: containerWidth,
            borderTopLeftRadius: radius,
            borderTopRightRadius: radius,
            opacity: opacityContainer,
          }}
        >
          <div className='flex flex-col overflow-hidden items-center gap-8 h-full'>
            <aside className='flex flex-col max-w-[260px] sm:max-w-[350px] md:max-w-[1000px] gap-2 items-center text-center'>
              <TextEffect
                per='char'
                triggerInView
                speedReveal={1}
                className='w-full text-center text-[28px] sm:text-[32px] lg:text-[54px] leading-tight font-medium text-black'
              >
                Crafting Sleek Digital Experiences
              </TextEffect>
              <TextEffect
                per='char'
                triggerInView
                speedReveal={1}
                className='text-center text-body lg:text-[24px]'
              >
                Modern. Minimalist. Stunning.
              </TextEffect>

              {/* Always Available container is always rendered */}
              <motion.div
                layout
                className='overflow-hidden'
                initial={{ maxHeight: 0, opacity: 0 }}
                transition={{ duration: 0.5 }}
                animate={
                  showAlwaysAvailable
                    ? { maxHeight: 40, opacity: 1 }
                    : { maxHeight: 0, opacity: 0 }
                }
              >
                <span className='text-gray-500/85'>Always Available</span>
              </motion.div>
            </aside>
            <motion.div layout className='flex w-full gap-4 justify-center'>
              <motion.div
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <button className='group text-small w-fit bg-gray-950 text-white flex items-center justify-between md:text-body transition-transform duration-200 font-normal z-30 rounded-full border hover:bg-gray-950/90 border-black py-3 px-4 gap-2'>
                  Connect
                  <div className='transition-transform duration-200 group-hover:-rotate-45'>
                    <CircleArrowRight className='md:w-[22px] md:h-[22px] w-[18px] h-[18px]' />
                  </div>
                </button>
              </motion.div>
              <motion.div
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <button className='group text-small w-fit text-black flex items-center justify-between md:text-body transition-transform duration-200 font-normal z-30 rounded-full border hover:text-white hover:bg-gray-950/90 border-black py-3 px-4 gap-2'>
                  Learn more
                  <div className='transition-transform duration-200 group-hover:-rotate-45'>
                    <CircleArrowRight className='md:w-[22px] md:h-[22px] w-[18px] h-[18px]' />
                  </div>
                </button>
              </motion.div>
            </motion.div>
            <InfiniteSlider className='mt-auto'>
              <Image
                src='/housetoUSe.avif'
                alt='Dean blunt - Black Metal 2'
                width={300}
                height={220}
                className='w-full h-[170px] object-cover'
              />
              <Image
                src='/mountain.jpg'
                alt='Dean blunt - Black Metal 2'
                width={300}
                height={200}
                className='w-full h-[185px] object-cover'
              />
              <Image
                src='/office.jpg'
                alt='Dean blunt - Black Metal 2'
                width={300}
                height={165}
                className='w-full h-[160px] object-cover'
              />
              <Image
                src='/housetoUSe.avif'
                alt='Dean blunt - Black Metal 2'
                width={300}
                height={210}
                className='w-full h-[175px] object-cover'
              />
              <Image
                src='/mountain.jpg'
                alt='Dean blunt - Black Metal 2'
                width={300}
                height={190}
                className='w-full h-[150px] object-cover'
              />
              <Image
                src='/office.jpg'
                alt='Dean blunt - Black Metal 2'
                width={300}
                height={220}
                className='w-full h-[185px] object-cover'
              />
              <Image
                src='/housetoUSe.avif'
                alt='Dean blunt - Black Metal 2'
                width={300}
                height={210}
                className='w-full h-[160px] object-cover'
              />
              <Image
                src='/mountain.jpg'
                alt='Dean blunt - Black Metal 2'
                width={300}
                height={180}
                className='w-full h-[145px] object-cover'
              />
              <Image
                src='/office.jpg'
                alt='Dean blunt - Black Metal 2'
                width={300}
                height={155}
                className='w-full h-[180px] object-cover'
              />
              <Image
                src='/housetoUSe.avif'
                alt='Dean blunt - Black Metal 2'
                width={300}
                height={205}
                className='w-full h-[165px] object-cover'
              />
            </InfiniteSlider>
          </div>
        </motion.div>
      </div>
    </>
  );
}
