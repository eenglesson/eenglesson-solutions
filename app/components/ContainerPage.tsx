import { ReactNode } from 'react';

export default function ContainerPage({ children }: { children: ReactNode }) {
  return (
    <div className={`max-w-[1600px] mx-auto mt-4 sm:mt-8 px-4 sm:px-8`}>
      {children}
    </div>
  );
}
