'use client';

import { cn } from '@/lib/utils';
import { motion, MotionProps, useInView } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';

interface AnimatedSpanProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  inView?: boolean; // Added to control animation based on visibility
}

interface AnimatedSpanProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  shouldAnimate?: boolean; // Changed from inView
}

export const AnimatedSpan = ({
  children,
  delay = 0,
  className,
  shouldAnimate = false, // Default to false
  ...props
}: AnimatedSpanProps) => (
  <motion.div
    initial={{ opacity: 0, y: -5 }}
    animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: -5 }}
    transition={{ duration: 0.3, delay: delay / 1000 }}
    className={cn('grid text-sm font-normal tracking-tight', className)}
    {...props}
  >
    {children}
  </motion.div>
);

interface TypingAnimationProps extends MotionProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
  shouldAnimate?: boolean; // Changed from inView
}

export const TypingAnimation = ({
  children,
  className,
  duration = 40,
  delay = 0,
  as: Component = 'span',
  shouldAnimate = false, // Default to false
  ...props
}: TypingAnimationProps) => {
  if (typeof children !== 'string') {
    throw new Error('TypingAnimation: children must be a string.');
  }

  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });

  const [displayedText, setDisplayedText] = useState<string>('');
  const [started, setStarted] = useState(false);

  // Start the typing effect when shouldAnimate becomes true
  useEffect(() => {
    if (shouldAnimate && !started) {
      const startTimeout = setTimeout(() => {
        setStarted(true);
      }, delay);
      return () => clearTimeout(startTimeout);
    }
  }, [shouldAnimate, delay]);

  // Run the typing effect when started
  useEffect(() => {
    if (started) {
      let i = 0;
      const typingEffect = setInterval(() => {
        if (i < children.length) {
          setDisplayedText(children.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typingEffect);
        }
      }, duration);
      return () => clearInterval(typingEffect);
    }
  }, [started, children, duration]);

  return (
    <MotionComponent
      className={cn('text-sm font-normal tracking-tight', className)}
      {...props}
    >
      {displayedText}
    </MotionComponent>
  );
};

interface TerminalProps {
  children: React.ReactNode;
  className?: string;
}

export const Terminal = ({ children, className }: TerminalProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref); // Detects when Terminal is in view
  const [hasBeenInView, setHasBeenInView] = useState(false);

  // Set hasBeenInView to true the first time the component comes into view
  useEffect(() => {
    if (inView && !hasBeenInView) {
      setHasBeenInView(true);
    }
  }, [inView]);

  // Pass shouldAnimate to children
  const clonedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(
        child as React.ReactElement<{ shouldAnimate: boolean }>,
        {
          shouldAnimate: hasBeenInView,
        }
      );
    }
    return child;
  });

  return (
    <div
      ref={ref}
      className={cn(
        'z-0 h-full min-h-[500px] w-full max-w-3xl rounded-xl border border-border bg-background',
        className
      )}
    >
      <div className='flex flex-col gap-y-2 border-b border-border p-4'>
        <div className='flex flex-row gap-x-2'>
          <div className='h-2 w-2 rounded-full bg-red-500'></div>
          <div className='h-2 w-2 rounded-full bg-yellow-500'></div>
          <div className='h-2 w-2 rounded-full bg-green-500'></div>
        </div>
      </div>
      <pre className='p-4'>
        <code className='grid gap-y-1.5 overflow-auto text-wrap'>
          {clonedChildren}
        </code>
      </pre>
    </div>
  );
};
