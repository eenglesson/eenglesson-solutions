'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { SlidingNumber } from './ui/slidingNumber';
import { cn } from '@/lib/utils';

export function SlidingNumberBasic({
  target,
  children,
  className,
}: {
  target: number;
  children: string;
  className?: string;
}) {
  const [value, setValue] = useState(0);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      // Assuming some trigger like visibility
      hasAnimated.current = true;
      const startTime = performance.now();
      const duration = 1000; // Animation lasts 2 seconds

      const interval = setInterval(() => {
        const currentTime = performance.now();
        const elapsed = currentTime - startTime;

        if (elapsed >= duration) {
          setValue(target); // Set final value exactly
          clearInterval(interval);
        } else {
          const progress = elapsed / duration; // Progress from 0 to 1
          const currentValue = Math.round(progress * target); // Round to integer
          setValue(currentValue); // Update the displayed value
        }
      }, 40); // Update every 40ms for smoothness

      return () => clearInterval(interval); // Cleanup
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      viewport={{ once: true }}
      className={cn('leading-none text-black dark:text-white', className)}
    >
      <div className='inline-flex items-center xgap-1'>
        <SlidingNumber value={value} /> {children}
      </div>
    </motion.div>
  );
}
