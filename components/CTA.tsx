import Image from 'next/image';
import { Button } from './ui/button';
import { CircleArrowRight } from 'lucide-react';
import { BorderBeam } from './magicui/border-beam';

export default function CTA() {
  return (
    <section className='py-16 h-fit md:py-32'>
      <div className='mx-auto max-w-7xl space-y-8 px-6 md:space-y-16'>
        <h2 className='relative z-10 max-w-xl text-4xl font-medium lg:text-5xl'>
          Ready to Elevate Your Online Presence?
        </h2>
        <div className='relative'>
          <div className='relative z-10 flex flex-col h-full space-y-4 md:w-1/2'>
            <p className='text-body'>
              The digital world moves fast—don’t get left behind. At E |
              Englesson, we create standout websites and solutions that drive
              real growth and connect with your audience. Let’s make your online
              presence your biggest asset.
            </p>
            <p>
              <span className='font-bold'>Take the first step today.</span>{' '}
              Schedule a free consultation and see how we can bring your vision
              to life.
            </p>
            <div className='mt-4'>
              <Button
                className={`group hover:shadow-sm rounded-full py-5 text-base hover:bg-accent dark:hover:bg-accent/50 hover:text-foreground`}
              >
                Book an appointment
                <div className='transition-transform duration-200 group-hover:-rotate-45'>
                  <CircleArrowRight className='size-5' />
                </div>
              </Button>
            </div>
          </div>
          <div className='h-fit absolute inset-y-64 md:-inset-y-12 md:inset-x-0 mt-0'>
            <div
              aria-hidden
              className='bg-linear-to-l z-1 to-background absolute inset-0 from-transparent to-60% block'
            ></div>
            <div className='border-border/50 relative rounded-2xl border p-3'>
              <BorderBeam
                size={220}
                duration={10}
                delay={0}
                colorFrom='rgb(218, 0, 171)'
                colorTo='rgb(249, 129, 47)'
                initialOffset={0}
              />

              <Image
                src='/dashboardDark.png'
                className='hidden rounded-[12px] object-cover object-top h-[250px] dark:block md:h-[600px]'
                alt='Digital innovation dark'
                width={1207}
                height={929}
              />
              <Image
                src='/dashboardLight.png'
                className='rounded-[12px] shadow object-cover object-top dark:hidden h-[250px] md:h-[600px]'
                alt='Digital innovation light'
                width={1207}
                height={929}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
