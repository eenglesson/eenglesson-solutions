'use client';

import React from 'react';
import * as LucideIcons from 'lucide-react'; // Import entire library
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { GlowEffect } from '@/components/ui/glow-effect';

interface InfoCardProps {
  iconName: string;
  title: string;
  description: string;
  className?: string;
}

export function InfoCard({
  iconName,
  title,
  description,
  className,
}: InfoCardProps) {
  // Dynamic lookup from the library; fallback to, say, "Zap" if not found
  const Icon =
    (LucideIcons as unknown as Record<string, LucideIcon>)[iconName] ??
    LucideIcons.Zap;
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
        {/* Glow effect as an absolutely positioned element with a negative inset */}
        <GlowEffect
          colors={['#2563EB', '#14B8A6', '#A78BFA', '#3B82F6', '#60A5FA']}
          mode='colorShift'
          blur='medium'
          duration={6}
          scale={1}
          // Negative inset makes it a “border” around the icon
          className='absolute -inset-0 rounded-2xl'
        />

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
}

export default InfoCard;
