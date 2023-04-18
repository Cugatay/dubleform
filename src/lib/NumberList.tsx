import clsx from 'clsx';
import { ReactNode } from 'react';

interface IProps extends React.HTMLAttributes<HTMLOListElement> {
  children: ReactNode;
}

export function NumberList({ children, className, ...props }: IProps) {
  return (
    <ol {...props} className={clsx('dform-number-list', className)}>
      {children}
    </ol>
  );
}
