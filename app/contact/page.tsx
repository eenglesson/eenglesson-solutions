import { AccordionIcons } from '@/components/AccordionIcons';
import { ContactForm } from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function page() {
  return (
    <>
      <Navbar />

      <section className='w-[100vw] h-full px-4 overflow-x-hidden'>
        <div className='flex flex-col mx-auto items-center gap-8 mt-32 sm:mt-40 max-w-7xl'>
          <ContactForm />
        </div>

        <section className='mt-32 max-w-[500px] mx-auto -mb-40'>
          <div className=' flex mx-auto'>
            <AccordionIcons />
          </div>
        </section>

        <Footer />
      </section>
    </>
  );
}

{
  /* <aside className='hidden md:flex w-1/2 flex-col justify-end gap-4'>
<h2 className='text-lg font-medium'>Contact Info</h2>
<div className='flex flex-col gap-2'>
  <div className='flex items-center gap-2'>
    <Mail size={20} />
    <Link
      href='mailto:eliasenglesson00@gmail.com'
      className='hover:underline hover:text-primary text-muted-foreground'
    >
      eliasenglesson00@gmail.com
    </Link>
  </div>
  <div className='flex items-center gap-2'>
    <Phone size={20} />
    <span className='cursor-auto text-muted-foreground hover:underline hover:text-primary'>
      +46 76 310 59 56
    </span>
  </div>
</div>
</aside> */
}

{
  /* <aside className='flex flex-col w-full max-w-[500px] mt-8 gap-2'>
<h2 className='text-lg font-normal'>Contact Info</h2>
<div className='flex text-sm items-center gap-2'>
  <Mail size={18} className='shrink-0' />
  <Link
    href='mail:to:eliasenglesson00@gmail.com'
    className='hover:underline hover:text-primary text-muted-foreground'
  >
    eliasenglesson00@gmail.com
  </Link>
</div>
<div className='flex items-center gap-2'>
  <Phone size={18} />
  <span className='text-muted-foreground text-sm hover:underline hover:text-primary'>
    +46 76 310 59 56
  </span>
</div>
<div className='flex items-center gap-2'>
  <MapPinHouse size={18} />
  <span className='text-muted-foreground text-sm hover:underline hover:text-primary'>
    Smörkärnegatan 15, 412 78 Göteborg
  </span>
</div>
</aside> */
}

{
  /* <aside className='relative z-10 mx-auto max-w-xl space-y-6 mb-16 text-center md:space-y-8'>
<TextEffect
  preset='fade-in-blur'
  speedSegment={0.4}
  as='h2'
  className='text-3xl text-center font-medium lg:text-5xl'
>
  Your Digital Success Starts Here
</TextEffect>
<TextEffect
  preset='fade-in-blur'
  speedSegment={0.6}
  as='p'
  per='line'
  className='text-sm md:text-base text-center font-medium'
>
  Ready to transform your online presence? Whether you have a
  specific project in mind or just want to explore possibilities,
  we&apos;re here to listen, advise, and create digital solutions
  tailored to your unique needs. Fill out the form below, and
  let&apos;s start the conversation.
</TextEffect>
</aside> */
}
