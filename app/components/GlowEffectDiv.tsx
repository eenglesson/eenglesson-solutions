import { GlowEffect } from '@/components/ui/glow-effect';
import { ReactNode, JSX } from 'react';

export function GlowEffectDiv({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <div className='relative rounded-2xl'>
      <GlowEffect
        colors={['#FF5733', '#33FF57', '#3357FF', '#F1C40F']}
        mode='colorShift'
        blur='soft'
        duration={3}
        scale={1}
      />

      {children}
    </div>
  );
}
