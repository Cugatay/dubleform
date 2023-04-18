import { ReactNode } from 'react';
import clsx from 'clsx';

interface IProps extends React.HTMLAttributes<HTMLUListElement> {
  children: ReactNode;
}

export function BulletList({ children, className, ...props }: IProps) {
  return (
    <ul {...props} className={clsx('dform-bullet-list', className)}>
      {children}
    </ul>
  );
}
