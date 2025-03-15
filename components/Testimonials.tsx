import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';

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
              <Image
                className='h-6 w-fit dark:invert'
                src='https://html.tailus.io/blocks/customers/nike.svg'
                alt='Nike Logo'
                height='24'
                width='32'
              />
            </CardHeader>
            <CardContent>
              <blockquote className='grid h-full grid-rows-[1fr_auto] gap-6'>
                <p className='text-2xl font-medium'>
                  Englesson Solutions revolutionized our digital presence. Their
                  tailored approach and innovative designs streamlined our
                  development process, delivering a website that truly reflects
                  our brand.
                </p>

                <div className='grid grid-cols-[auto_1fr] items-center gap-3'>
                  <Avatar className='size-12'>
                    <AvatarImage
                      src='https://tailus.io/images/reviews/shekinah.webp'
                      alt='Shekinah Tshiokufila'
                      height='400'
                      width='400'
                      loading='lazy'
                    />
                    <AvatarFallback>ST</AvatarFallback>
                  </Avatar>

                  <div>
                    <cite className='text-sm font-medium'>
                      Shekinah Tshiokufila
                    </cite>
                    <span className='text-muted-foreground block text-sm'>
                      Software Ingineer
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card className='col-span-2 sm:col-span-1 md:col-span-2 lg:col-span-1'>
            <CardContent className='h-full pt-6'>
              <blockquote className='grid h-full grid-rows-[1fr_auto] gap-6'>
                <p className='text-base font-medium'>
                  Englesson Solutions exceeded our expectations by delivering a
                  website that is both visually compelling and exceptionally
                  user-friendly.
                </p>

                <div className='grid grid-cols-[auto_1fr] items-center gap-3'>
                  <Avatar className='size-12'>
                    <AvatarImage
                      src='https://tailus.io/images/reviews/jonathan.webp'
                      alt='Jonathan Yombo'
                      height='400'
                      width='400'
                      loading='lazy'
                    />
                    <AvatarFallback>JY</AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className='text-sm font-medium'>Jonathan Yombo</cite>
                    <span className='text-muted-foreground block text-sm'>
                      Software Ingineer
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card className='col-span-2 sm:col-span-1 lg:col-span-1 md:col-span-4 '>
            <CardContent className='h-full pt-6'>
              <blockquote className='grid h-full grid-rows-[1fr_auto] gap-6'>
                <p className='text-base font-medium'>
                  Collaborating with Englesson Solutions was a game-changer.
                  Their expert team delivered a visually stunning, highly
                  functional website that captured our vision perfectly.
                </p>

                <div className='grid items-center gap-3 [grid-template-columns:auto_1fr]'>
                  <Avatar className='size-12'>
                    <AvatarImage
                      src='https://tailus.io/images/reviews/yucel.webp'
                      alt='Yucel Faruksahan'
                      height='400'
                      width='400'
                      loading='lazy'
                    />
                    <AvatarFallback>YF</AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className='text-sm font-medium'>
                      Yucel Faruksahan
                    </cite>
                    <span className='text-muted-foreground block text-sm'>
                      Creator, Tailkits
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card className='col-span-2  md:col-span-4 lg:col-span-2 '>
            <CardContent className='h-full pt-6'>
              <blockquote className='grid h-full  grid-rows-[1fr_auto] gap-6'>
                <p className='text-base font-medium'>
                  The team at Englesson Solutions truly understands digital
                  transformation. Their innovative, responsive solutions have
                  boosted our online engagement and accelerated our business
                  growth.
                </p>

                <div className='grid grid-cols-[auto_1fr] gap-3'>
                  <Avatar className='size-12'>
                    <AvatarImage
                      src='https://tailus.io/images/reviews/rodrigo.webp'
                      alt='Rodrigo Aguilar'
                      height='400'
                      width='400'
                      loading='lazy'
                    />
                    <AvatarFallback>YF</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className='text-sm font-medium'>Rodrigo Aguilar</p>
                    <span className='text-muted-foreground block text-sm'>
                      Creator, TailwindAwesome
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
