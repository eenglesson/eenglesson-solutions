import Image from 'next/image';
import { InfiniteSlider } from './ui/infinite-slider';
import { ProgressiveBlur } from './ui/progressive-blur';

export default function LogoCloud() {
  return (
    <section className='bg-background overflow-hidden p-8'>
      <div className='group relative m-auto max-w-7xl px-4'>
        <div className='flex flex-col items-center md:flex-row'>
          <div className='md:max-w-44 md:border-r md:pr-6'>
            <p className='text-end text-sm'>Powering the best teams</p>
          </div>
          <div className='relative py-6 md:w-[calc(100%-7rem)]'>
            <InfiniteSlider speedOnHover={20} speed={20} gap={86}>
              <div className='flex'>
                <Image
                  className='mx-auto h-5 w-fit dark:invert'
                  src='https://html.tailus.io/blocks/customers/nvidia.svg'
                  alt='Nvidia Logo'
                  height='20'
                  width='32'
                />
              </div>

              <div className='flex'>
                <Image
                  className='mx-auto h-4 w-fit dark:invert'
                  src='https://html.tailus.io/blocks/customers/column.svg'
                  alt='Column Logo'
                  height='16'
                  width='32'
                />
              </div>
              <div className='flex'>
                <Image
                  className='mx-auto h-4 w-fit dark:invert'
                  src='https://html.tailus.io/blocks/customers/github.svg'
                  alt='GitHub Logo'
                  height='16'
                  width='32'
                />
              </div>
              <div className='flex'>
                <Image
                  className='mx-auto h-5 w-fit dark:invert'
                  src='https://html.tailus.io/blocks/customers/nike.svg'
                  alt='Nike Logo'
                  height='20'
                  width='32'
                />
              </div>
              <div className='flex'>
                <Image
                  className='mx-auto h-5 w-fit dark:invert'
                  src='https://html.tailus.io/blocks/customers/lemonsqueezy.svg'
                  alt='Lemon Squeezy Logo'
                  height='20'
                  width='32'
                />
              </div>
              <div className='flex'>
                <Image
                  className='mx-auto h-4 w-fit dark:invert'
                  src='https://html.tailus.io/blocks/customers/laravel.svg'
                  alt='Laravel Logo'
                  height='16'
                  width='32'
                />
              </div>
              <div className='flex'>
                <Image
                  className='mx-auto h-7 w-fit dark:invert'
                  src='https://html.tailus.io/blocks/customers/lilly.svg'
                  alt='Lilly Logo'
                  height='28'
                  width='32'
                />
              </div>

              <div className='flex'>
                <Image
                  className='mx-auto h-6 w-fit dark:invert'
                  src='https://html.tailus.io/blocks/customers/openai.svg'
                  alt='OpenAI Logo'
                  height='24'
                  width='32'
                />
              </div>
            </InfiniteSlider>

            <div className='bg-linear-to-r from-background absolute inset-y-0 left-0 w-20'></div>
            <div className='bg-linear-to-l from-background absolute inset-y-0 right-0 w-20'></div>
            <ProgressiveBlur
              className='pointer-events-none absolute left-0 top-0 h-full w-20'
              direction='left'
              blurIntensity={1}
            />
            <ProgressiveBlur
              className='pointer-events-none absolute right-0 top-0 h-full w-20'
              direction='right'
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
