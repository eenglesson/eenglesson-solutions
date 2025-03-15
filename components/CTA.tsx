import Image from 'next/image';
import { Button } from './ui/button';
import { CircleArrowRight } from 'lucide-react';
import { BorderBeam } from './magicui/border-beam';

export default function CTA() {
  return (
    <section className='py-16 md:py-32'>
      <div className='mx-auto max-w-7xl space-y-8 px-6 md:space-y-16'>
        <h2 className='relative z-10 max-w-xl text-4xl font-medium lg:text-5xl'>
          Transform Your Digital Vision Today
        </h2>
        <div className='relative'>
          <div className='relative z-10 flex flex-col h-full space-y-4 md:w-1/2'>
            <p className='text-body'>
              At E | Englesson Solutions, your digital presence is our passion.
              We build bespoke websites and custom digital solutions that not
              only capture your unique vision, but also drive measurable
              results.
            </p>
            <p>
              Don’t settle for ordinary when you can embrace extraordinary. Your
              journey to digital excellence starts here—let’s collaborate to
              bring your vision to life.
            </p>
            <div className='mt-4'>
              <Button
                className={`group text-small w-fit text-foreground flex items-center bg-accent justify-between md:text-body transition-transform duration-200 font-normal z-30 rounded-full border-foreground dark:hover:bg-accent/50 hover:bg-accent hover:cursor-pointer py-5 gap-2`}
              >
                Book an appointment
                <div className='transition-transform duration-200 group-hover:-rotate-45'>
                  <CircleArrowRight className='md:w-[22px] md:h-[22px] w-[18px] h-[18px]' />
                </div>
              </Button>
            </div>
          </div>
          <div className='h-fit absolute inset-y-40 md:-inset-y-12 md:inset-x-0 mt-0'>
            <div
              aria-hidden
              className='bg-linear-to-l z-1 to-background absolute inset-0 from-transparent to-60% block'
            ></div>
            <div className='border-border/50 relative rounded-2xl border border-dotted p-3'>
              <BorderBeam
                size={200}
                duration={10}
                delay={0}
                colorFrom='rgb(218, 0, 171)'
                colorTo='rgb(249, 129, 47)'
                initialOffset={0}
              />

              <Image
                src='/shadcndb.png'
                className='hidden rounded-[12px] object-cover object-top h-[250px] dark:block md:h-[600px]'
                alt='Digital innovation dark'
                width={1207}
                height={929}
              />
              <Image
                src='/people.jpeg'
                className='rounded-[12px] shadow dark:hidden'
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
