import { Rocket, Settings } from 'lucide-react';
import Image from 'next/image';
import ColourfulText from './ui/colourful-text';
import { BorderBeam } from './magicui/border-beam';

export default function Content1() {
  return (
    <section className='py-16 md:py-32'>
      <div className='mx-auto max-w-7xl space-y-8 px-6 md:space-y-16'>
        <h2 className='relative z-10 max-w-2xl text-4xl font-medium lg:text-5xl'>
          The <ColourfulText text='E | Englesson' /> Ecosystem is evolving to
          power the future of digital innovation.
        </h2>
        <div className='grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24'>
          <div className='relative space-y-4'>
            <p className='text-muted-foreground'>
              More than a service, we offer a future-ready foundation for your
              digital success. Our ecosystem combines dynamic performance with
              innovative technology, ensuring your website adapts to tomorrow’s
              challenges.
            </p>
            <p className='text-muted-foreground'>
              Experience unrivaled speed, flexibility, and cutting-edge
              solutions that turn bold ideas into real-world wins.
            </p>

            <div className='grid grid-cols-2 gap-3 pt-6 sm:gap-4'>
              <div className='space-y-3'>
                <div className='flex items-center gap-2'>
                  <Settings className='size-5' />
                  <h3 className='text-base font-medium'>
                    Adaptive Infrastructure
                  </h3>
                </div>
                <p className='text-muted-foreground text-base'>
                  Experience unrivaled speed and responsiveness that keeps your
                  business ahead in today’s fast-paced digital world.
                </p>
              </div>
              <div className='space-y-2'>
                <div className='flex items-center gap-2'>
                  <Rocket className='size-5' />
                  <h3 className='text-base font-medium'>Innovative Momentum</h3>
                </div>
                <p className='text-muted-foreground text-base'>
                  Propel your business forward with cutting-edge solutions that
                  spark creativity and drive exponential growth—transforming
                  bold ideas into real-world success.
                </p>
              </div>
            </div>
          </div>
          <div className='relative mt-6 sm:mt-0 overflow-hidden'>
            <div className='bg-linear-to-b aspect-67/34 relative rounded-2xl from-zinc-100 to-transparent p-px dark:from-zinc-700'>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
