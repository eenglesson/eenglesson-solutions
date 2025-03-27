import Image from 'next/image';
import { BorderBeam } from './magicui/border-beam';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import { AnimatedSpan, Terminal, TypingAnimation } from './magicui/terminal';

export default function AboutHeader() {
  return (
    <section className='space-y-12'>
      <div className='mx-auto max-w-7xl space-y-8 md:space-y-12'>
        <div className='mx-auto space-y-6 text-center md:space-y-8'>
          <h2 className='text-balance text-4xl font-medium md:text-6xl'>
            Building Your Digital Future Since 2024
          </h2>
          <p className='max-w-3xl mx-auto'>
            At E | Englesson, we are dedicated to crafting exceptional digital
            experiences that empower your business. Our team of experts is
            committed to delivering innovative solutions tailored to your needs.
          </p>
        </div>
        <div className='relative mt-6 sm:mt-0 overflow-hidden'>
          <div className='bg-linear-to-b rounded-2xl to-transparent p-2 border border-border/50  '>
            <Image
              className='shadow rounded-lg w-full h-full greyscale'
              src='/manLaptop.jpeg'
              alt='team image'
              loading='lazy'
              width={4000}
              height={4000}
            />
            <div
              aria-hidden
              className='bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%'
            />
            <BorderBeam
              size={220}
              duration={8}
              delay={0}
              colorFrom='rgb(218, 0, 171)'
              colorTo='rgb(249, 129, 47)'
              initialOffset={0}
            />
          </div>
        </div>
      </div>
      <section className='border-b py-5'>
        <h2 className='text-base font-semibold tracking-widest text-accent-foreground'>
          Our Journey in Numbers
        </h2>
        <div className='mt-6 grid grid-cols-2 text-sm md:text-base gap-8 md:grid-cols-4'>
          <div>
            <h3 className='text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl'>
              100%
            </h3>
            <p className='mt-1 font-medium text-muted-foreground'>
              Client Retention Rate
            </p>
          </div>
          <div>
            <h3 className='text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl'>
              7+
            </h3>
            <p className='mt-1 font-medium text-muted-foreground'>
              Websites Launched
            </p>
          </div>

          <div>
            <h3 className='text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl'>
              16+
            </h3>
            <p className='mt-1 font-medium text-muted-foreground'>
              Projects Completed
            </p>
          </div>
          <div>
            <h3 className='text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl'>
              6+
            </h3>
            <p className='mt-1 font-medium text-muted-foreground'>
              Years of Combined Team Experience
            </p>
          </div>
        </div>
      </section>
      <section className='relative py-10'>
        <div className='flex flex-col gap-10 md:gap-16'>
          <aside>
            <h2 className='text-2xl font-semibold tracking-tight md:text-3xl'>
              Designing for Beauty, Building for Speed
            </h2>
            <p className='mt-4 max-w-4xl text-base text-muted-foreground md:text-lg'>
              Welcome to E | Englesson, where we turn your ideas into powerful
              digital experiences. Founded in 2024, we started with a simple
              mission to create websites that blend stunning design with
              top-tier performance.
              <br />
              <br />
              Based in Göteborg, Sweden, our small but passionate team has grown
              into a trusted partner for businesses looking to stand out online.
              Whether you&apos;re a startup or an established company,
              we&apos;re here to help you succeed in the fast-moving digital
              world.
            </p>
          </aside>
          <aside>
            <h2 className='text-2xl font-semibold tracking-tight md:text-3xl'>
              Our Mission
            </h2>
            <p className='mt-4 max-w-4xl text-base text-muted-foreground md:text-lg'>
              At E | Englesson, we’re all about crafting digital success
              stories. We specialize in bespoke websites and solutions that
              drive growth, boost engagement, and deliver measurable results.
              Our love for clean design and efficient code ensures your website
              isn’t just a pretty face—it’s a tool that works hard for your
              business, today and tomorrow.
            </p>
          </aside>
        </div>
        {/* Background decoration */}
        <>
          <div className='absolute inset-0 z-[-1] -translate-y-1/2 blur-[100px] will-change-transform'>
            <div className='bg-gradient-1/25 absolute top-0 right-0 h-[400px] w-[800px] -translate-x-1/5 rounded-full' />
            <div className='bg-gradient-2/10 absolute top-0 right-0 size-[400px] rounded-full' />
          </div>
        </>
      </section>
      <section className='py-10'>
        <Carousel
          className='relative w-full h-full'
          opts={{
            align: 'start',
          }}
        >
          <CarouselContent className='-ml-4'>
            <CarouselItem className='basis-[90%]'>
              <div className='relative aspect-video'>
                <Image
                  src='/orangeHero.png'
                  alt='Charter team member working'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-2xl'
                  priority
                />
              </div>
            </CarouselItem>
            <CarouselItem className='basis-[90%]'>
              <div className='relative aspect-video'>
                <Image
                  src='/food.png'
                  alt='Modern workspace setup'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-2xl'
                  priority
                />
              </div>
            </CarouselItem>
            <CarouselItem className='basis-[90%]'>
              <div className='relative aspect-video'>
                <Image
                  src='/sidebar.png'
                  alt='Team collaboration'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-2xl'
                  priority
                />
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className='absolute -bottom-8 z-20 left-12'>
            <CarouselPrevious className='' />
            <CarouselNext className='' />
          </div>
        </Carousel>
      </section>

      {/* Founding Team Section */}
      <section className='py-10'>
        <div className='grid gap-5 lg:grid-cols-2 md:gap-10 lg:gap-16'>
          <div className='md:order-1 flex flex-col gap-12'>
            <aside>
              <h2 className='text-2xl font-semibold tracking-tight md:text-3xl'>
                Our Story
              </h2>
              <p className='mt-4 max-w-4xl text-base text-muted-foreground lg:text-lg'>
                From our base in Göteborg, we’re on a mission to build websites
                that power the best teams in the world. We dream of partnering
                with innovative companies—those pushing boundaries in tech,
                design, and beyond. Whether it’s a fast-growing startup or an
                industry leader, our goal is to help visionary businesses stand
                out online with websites that are as bold and forward-thinking
                as they are.
                <br />
                <br />
                Though we’re just getting started, our ambition is clear: to
                create digital experiences that don’t just meet today’s needs
                but are ready for tomorrow’s challenges. Our ecosystem is built
                to evolve with the future, combining lightning-fast performance,
                unmatched flexibility, and cutting-edge technology. We’re here
                to turn bold ideas into real wins—helping businesses grow,
                engage, and thrive in a fast-moving digital world.
                <br />
                <br />
                We may be new, but our passion for clean design and efficient
                code runs deep. Every project we take on is a step toward
                realizing our vision: to be the go-to partner for businesses
                that want more than just a website—they want a digital success
                story.
              </p>
            </aside>
          </div>
          <aside className=' w-full order-2 mt-2 sm:mt-0'>
            <Terminal>
              <TypingAnimation>E | Englesson -about</TypingAnimation>
              <AnimatedSpan delay={1500} className='text-green-500'>
                <span>✔ Establishing connection...</span>
              </AnimatedSpan>
              <AnimatedSpan delay={2500} className='text-green-500'>
                <span>✔ Loading company profile...</span>
              </AnimatedSpan>
              <TypingAnimation delay={3000} className='text-muted-foreground'>
                E | Englesson: Crafting digital success stories since 2024.
              </TypingAnimation>
              <AnimatedSpan delay={3500} className='text-green-500'>
                <span>✔ Retrieving mission statement...</span>
              </AnimatedSpan>
              <TypingAnimation delay={4000} className='text-muted-foreground'>
                Our mission is to turn your ideas into powerful digital
                experiences.
              </TypingAnimation>
              <AnimatedSpan delay={4500} className='text-green-500'>
                <span>✔ Fetching team info...</span>
              </AnimatedSpan>
              <TypingAnimation delay={5000} className='text-muted-foreground'>
                Based in Göteborg, Sweden, our passionate team is ready to help
                you succeed.
              </TypingAnimation>
              <AnimatedSpan delay={5500} className='text-green-500'>
                <span>✔ Ready for deployment.</span>
              </AnimatedSpan>
              <TypingAnimation delay={6000} className='text-muted-foreground'>
                Contact us to start your project today.
              </TypingAnimation>
            </Terminal>
          </aside>
        </div>
      </section>
    </section>
  );
}

{
  /* <Image
src='https://shadcnblocks.com/images/block/placeholder-1.svg'
alt='Founding team collaboration'
width={800}
height={100}
className=' object-cover md:order-2 rounded-2xl shadow'
/>
<div
aria-hidden
className='bg-linear-to-b z-1 to-background absolute inset-0 from-transparent to-90% block'
></div> */
}
