import React from 'react';
import { FlipWords } from './flipWords';

export function FlipWordsDemo() {
  const words = ['better', 'cute', 'beautiful', 'modern'];

  return (
    <div className='h-[40rem] flex justify-center items-center '>
      <div className='text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400'>
        Build
        <FlipWords words={words} /> <br />
        websites with Aceternity UI
      </div>
    </div>
  );
}
