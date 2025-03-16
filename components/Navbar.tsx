'use client';
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { CircleArrowRight } from 'lucide-react';
import { TextEffect } from './ui/text-effect';

const links = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/About' },
  { label: 'Work', path: '/Work' },
  { label: 'Contact', path: '/Contact' },
];

const transitionVariants = {
  hidden: {
    opacity: 0,
    filter: 'blur(8px)',
    y: 12,
  },
  visible: (customDelay = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      opacity: {
        type: 'spring',
        bounce: 0.3,
        duration: 1.5,
        delay: customDelay,
      },
      y: { type: 'spring', bounce: 0.3, duration: 1.5, delay: customDelay },
      filter: { type: 'spring', bounce: 0, duration: 1.5, delay: customDelay },
    },
  }),
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);
  const mobileNavRef = useRef<HTMLElement | null>(null);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
    setHasClicked(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
        setIsOpen(false);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll(); // Check the initial scroll position
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        isOpen &&
        mobileNavRef.current &&
        !mobileNavRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    function handleScrollOutside() {
      if (isOpen) setIsOpen(false);
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('scroll', handleScrollOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScrollOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* Small Screen Navbar */}
      <nav
        ref={mobileNavRef}
        className={`fixed top-0 left-0 z-50 w-full flex md:hidden items-center justify-between py-4 px-6 transition-all duration-300 ${
          isScrolled
            ? "bg-gradient-to-b from-background/90 to-background/70 before:content-[''] before:absolute before:inset-0 before:pointer-events-none before:backdrop-blur-[40px] before:[mask-image:linear-gradient(to_bottom,transparent_40%,black_100%)] before:[-webkit-mask-image:linear-gradient(to_bottom,transparent_80%,black_100%)]"
            : 'bg-transparent before:content-none'
        }`}
      >
        <aside className='flex justify-center z-40 h-full gap-2 text-foreground'>
          <motion.div
            variants={transitionVariants}
            custom={0.2}
            initial='hidden'
            animate='visible'
            className='text-lg'
          >
            E
          </motion.div>
          <motion.div
            variants={transitionVariants}
            custom={0.3} // this is your individual delay
            initial='hidden'
            animate='visible'
            className={`flex border-r-[1.5px] 
         border-foreground
            `}
          />
          <TextEffect
            per='char'
            delay={0.4}
            speedReveal={0.5}
            preset='fade-in-blur'
            className='flex flex-col h-full text-lg'
          >
            Englesson
          </TextEffect>
        </aside>

        {/* Hamburger Icon */}
        <aside
          onClick={toggleHamburger}
          className={`flex flex-col gap-1.5 w-[26px] justify-center h-[26px] cursor-pointer z-30 text-foreground`}
        >
          <motion.div
            variants={transitionVariants}
            custom={0.7} // this is your individual delay
            initial='hidden'
            animate='visible'
          >
            <span
              className={`block bg-current h-[2px] rounded-full transition-transform duration-300 ${
                hasClicked
                  ? isOpen
                    ? 'animate-line1-open'
                    : 'animate-line1-close'
                  : ''
              }`}
            />
          </motion.div>
          <motion.div
            variants={transitionVariants}
            custom={0.7} // this is your individual delay
            initial='hidden'
            animate='visible'
          >
            <span
              className={`block bg-current h-[2px] rounded-full transition-transform duration-300 ${
                hasClicked
                  ? isOpen
                    ? 'animate-line2-open'
                    : 'animate-line2-close'
                  : ''
              }`}
            />
          </motion.div>
        </aside>

        {/* Dropdown Menu */}
        <ul
          className={`absolute left-0 w-screen z-20 flex flex-col pb-[50px] pt-[100px] pl-[36px] gap-6 bg-background text-foreground rounded-b-3xl shadow-xl transition-all duration-300 ease-in-out ${
            isOpen ? 'top-0' : 'top-[-400px]'
          }`}
        >
          {links.map((link, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -15 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.1 * i,
                  type: 'spring',
                  stiffness: 200,
                  damping: 20,
                  mass: 0.2,
                },
              }}
              className='z-20'
            >
              <div>
                <p className='text-lg'>{link.label}</p>
              </div>
            </motion.div>
          ))}
        </ul>
      </nav>

      {/* Large Screen Navbar */}
      <nav
        className={`fixed top-0 left-0 z-50 w-full hidden md:flex h-16 items-center justify-between transition-all duration-300 ${
          isScrolled
            ? "bg-gradient-to-b from-background/90 to-background/70 before:content-[''] before:absolute before:inset-0 before:pointer-events-none before:backdrop-blur-[40px] before:[mask-image:linear-gradient(to_bottom,transparent_40%,black_100%)] before:[-webkit-mask-image:linear-gradient(to_bottom,transparent_80%,black_100%)]"
            : 'bg-transparent'
        }    
        `}
      >
        <div className='relative max-w-7xl flex w-full justify-between px-6  mx-auto items-center'>
          {/* Left Section */}
          <aside className={`flex justify-center h-full gap-2 text-foreground`}>
            <motion.div
              variants={transitionVariants}
              custom={0.2} // this is your individual delay
              initial='hidden'
              animate='visible'
            >
              <p className='text-lg'>E</p>
            </motion.div>
            <motion.div
              variants={transitionVariants}
              custom={0.3} // this is your individual delay
              initial='hidden'
              animate='visible'
              className={`flex border-r-[1.5px] border-foreground`}
            />

            <TextEffect
              per='char'
              delay={0.4}
              speedReveal={0.5}
              preset='fade-in-blur'
              className='flex flex-col h-full text-lg'
            >
              Englesson
            </TextEffect>
          </aside>

          {/* Center Section (Links) */}
          <div className='absolute left-1/2 transform -translate-x-1/2 flex gap-8'>
            {links.map((link, i) => (
              <motion.div
                variants={transitionVariants}
                custom={0.7 + i * 0.1} // this is your individual delay
                initial='hidden'
                animate='visible'
                key={i}
                className={`underline-animation text-foreground`}
              >
                {link.label}
              </motion.div>
            ))}
          </div>

          {/* Right Section */}
          <motion.div
            variants={transitionVariants}
            custom={1.1} // this is your individual delay
            initial='hidden'
            animate='visible'
          >
            <button
              className={`
            
               group text-small w-fit text-foreground flex items-center justify-between md:text-body transition-transform duration-200 font-normal z-30 rounded-full border-foreground dark:hover:bg-accent/50 hover:bg-accent hover:cursor-pointer py-2 px-4 gap-2`}
            >
              Contact me
              <div className='transition-transform duration-200 group-hover:-rotate-45'>
                <CircleArrowRight className='w-[18px] h-[18px]' />
              </div>
            </button>
          </motion.div>
        </div>
      </nav>
    </>
  );
}
