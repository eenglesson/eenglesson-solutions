'use client';
import React, { useEffect, useState } from 'react';

import { motion } from 'motion/react';

const links = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/About' },
  { label: 'Work', path: '/Work' },
  { label: 'Contact', path: '/Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
    setHasClicked(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2000) {
        setIsScrolled(true);
        setIsOpen(false);
      } else {
        setIsScrolled(false);
      }
    };

    // Check scroll position once after mount
    handleScroll();

    // Listen for further scroll events
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColor = isOpen || isScrolled ? 'text-black' : 'text-white';
  const borderColor = isOpen || isScrolled ? 'border-black' : 'border-white';
  const bgColor = isOpen || isScrolled ? 'bg-black' : 'bg-white';

  return (
    <>
      {/* Navbar for smaller screens */}
      <nav
        className={`fixed top-0 left-0 z-50 w-full flex md:hidden items-center justify-between py-4 px-4 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-[0px_1px_6px_0px_rgba(0,_0,_0,_0.05)]'
            : 'bg-transparent'
        }`}
      >
        <aside className={`flex justify-center z-40 h-full gap-2 ${textColor}`}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className='text-h5'
          >
            E
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className={`flex ${borderColor} border-r-2`}
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className='flex flex-col h-full text-h5'
          >
            <p>Englesson</p>
          </motion.div>
        </aside>
        <aside
          onClick={toggleHamburger}
          className='flex flex-col gap-1.5 w-[26px] justify-center h-[26px] cursor-pointer z-30'
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <span
              className={`block ${bgColor} h-[2px] rounded-full transition-transform duration-300 ${
                hasClicked
                  ? isOpen
                    ? 'animate-line1Open'
                    : 'animate-line1Close'
                  : ''
              }`}
            ></span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.32 }}
          >
            <span
              className={`block ${bgColor} h-[2px] rounded-full transition-transform duration-300 ${
                hasClicked
                  ? isOpen
                    ? 'animate-line2Open'
                    : 'animate-line2Close'
                  : ''
              }`}
            ></span>
          </motion.div>
        </aside>

        <ul
          className={`absolute left-0 w-screen z-20 flex flex-col pb-[50px] pt-[100px] pl-[36px] gap-6 bg-white rounded-b-3xl shadow-xl transition-all duration-300 ease-in-out ${
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
                <p className='text-body text-black'>{link.label}</p>
              </div>
            </motion.div>
          ))}
        </ul>
      </nav>

      {/* Larger screen navbar */}
      <nav
        className={`fixed top-0 left-0 z-50 w-full hidden md:flex items-center justify-between py-4 px-8 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-[0px_1px_6px_0px_rgba(0,_0,_0,_0.05)]'
            : 'bg-transparent'
        }`}
      >
        <div className='relative flex w-full mx-auto items-center'>
          {/* Left Section */}
          <aside
            className={`flex justify-center h-full gap-2 ${
              isScrolled ? 'text-black' : 'text-white '
            }`}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className='text-h5'>E</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className={`flex border-r-2 border-black ${
                isScrolled ? 'text-black' : 'border-white '
              }`}
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className='flex flex-col h-full text-h5'
            >
              <p>Englesson</p>
            </motion.div>
          </aside>
          {/* Center Section with Links */}
          <div className='absolute left-1/2 transform -translate-x-1/2 flex gap-8'>
            {links.map((link, i) => (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.25 + i * 0.1 }}
                key={i}
                className={`underline-animation  ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
              >
                {link.label}
              </motion.p>
            ))}
          </div>
          {/* Right Section */}
          <div></div>
        </div>
      </nav>
    </>
  );
}
