import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { Framer } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className='py-16 md:py-32 bg-gray-100 dark:bg-transparent'>
      <div className='mx-auto max-w-7xl space-y-8 px-6 md:space-y-16'>
        <div className='relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12'>
          <h2 className='text-4xl font-medium lg:text-5xl'>
            Transforming Ideas into Digital Realities
          </h2>
          <p>
            We craft bespoke websites and digital solutions that drive growth
            and innovation. Our passion for design and technology has empowered
            businesses to elevate their online presence and achieve measurable
            success.
          </p>
        </div>

        <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2'>
          <Card className='grid grid-rows-[auto_1fr] gap-8 col-span-2 lg:row-span-2'>
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
              {/* <Image
                className='h-6 w-fit dark:invert'
                src='https://html.tailus.io/blocks/customers/zapier.svg'
                alt='Nike Logo'
                height='24'
                width='32'
              /> */}
            </CardHeader>
            <CardContent>
              <blockquote className='grid h-full grid-rows-[1fr_auto] gap-6'>
                <p className='text-3xl font-medium italic'>
                  Englesson Solutions revolutionized our digital presence. Their
                  tailored approach and innovative designs streamlined our
                  development process, delivering a website that truly reflects
                  our brand.
                </p>

                <div className='grid grid-cols-[auto_1fr] items-center gap-3'>
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
          <Card className='col-span-2 sm:col-span-1 md:col-span-2 lg:col-span-1'>
            <CardContent className='h-full pt-6'>
              <blockquote className='grid h-full grid-rows-[1fr_auto] gap-6'>
                <p className='text-base font-medium italic'>
                  Englesson Solutions exceeded our expectations by delivering a
                  website that is both visually compelling and exceptionally
                  user-friendly.
                </p>

                <div className='grid grid-cols-[auto_1fr] items-center gap-3'>
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
          <Card className='col-span-2 sm:col-span-1 lg:col-span-1 md:col-span-4 '>
            <CardContent className='h-full pt-6'>
              <blockquote className='grid h-full grid-rows-[1fr_auto] gap-6'>
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
          <Card className='col-span-2  md:col-span-4 lg:col-span-2 '>
            <CardContent className='h-full pt-6'>
              <blockquote className='grid h-full  grid-rows-[1fr_auto] gap-6'>
                <p className='text-base font-medium italic'>
                  The team at Englesson Solutions truly understands digital
                  transformation. Their innovative, responsive solutions have
                  boosted our online engagement and accelerated our business
                  growth.
                </p>

                <div className='grid grid-cols-[auto_1fr] gap-3'>
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
        </div>
      </div>
    </section>
  );
}
