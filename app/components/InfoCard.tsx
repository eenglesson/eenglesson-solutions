'use client';
import React from 'react';
import * as Icons from 'lucide-react'; // Import all icons dynamically
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface InfoCardProps {
  icon: string; // Now `icon` is a string
  title: string;
  description: string;
  className?: string;
}

const InfoCard = ({ icon, title, description, className }: InfoCardProps) => {
  const Icon: React.ComponentType<React.SVGProps<SVGSVGElement>> = (Icons[
    icon as keyof typeof Icons
  ] || Icons.HelpCircle) as React.ComponentType<React.SVGProps<SVGSVGElement>>;

  return (
    <div
      className={cn('flex flex-col items-center text-center p-6', className)}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className='relative group mb-4'
      >
        {/* Gradient border */}
        <div className='absolute -inset-1 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300'></div>
        {/* Icon container */}
        <div className='relative p-3 rounded-2xl bg-gray-100 z-10'>
          <Icon className='h-6 w-6 text-gray-800' />
        </div>
      </motion.div>
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className='text-h5 sm:text-h4 font-semibold mb-2'
      >
        {title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className='text-gray-500 text-small leading-relaxed max-w-sm'
      >
        {description}
      </motion.p>
    </div>
  );
};

export default InfoCard;
