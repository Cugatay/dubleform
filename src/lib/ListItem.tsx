import clsx from 'clsx';
import { ReactNode } from 'react';

interface IProps extends Omit<React.LiHTMLAttributes<HTMLLIElement>, 'title'> {
  title?: ReactNode;
  children: ReactNode;
}

export function ListItem({ title, children, className, ...props }: IProps) {
  return (
    <li {...props} className={clsx('dform-list-item', className)}>
      {title instanceof HTMLElement ? title : <div className='dform-list-item-title'>{title}</div>}
      <div className='dform-list-item-children'>{children}</div>
    </li>
  );
}
