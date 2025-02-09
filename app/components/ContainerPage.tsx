import { ReactNode } from 'react';

export default function ContainerPage({ children }: { children: ReactNode }) {
  return (
    <div className={`max-w-[1600px] mx-auto px-4 sm:px-8`}>{children}</div>
  );
}
