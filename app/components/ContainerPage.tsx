import { ReactNode, HTMLAttributes } from 'react';
import clsx from 'clsx'; // or import cn from 'classnames';

interface ContainerPageProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function ContainerPage({
  children,
  className,
  ...props
}: ContainerPageProps) {
  return (
    <div
      className={clsx('max-w-[1600px] mx-auto px-4 sm:px-8', className)}
      {...props}
    >
      {children}
    </div>
  );
}
