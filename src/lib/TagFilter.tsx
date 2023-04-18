import clsx from 'clsx';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  selected?: boolean;
}

export function TagFilter({ className, selected, ...props }: IProps) {
  return (
    <div
      {...props}
      className={clsx('dform-tag-filter', selected && 'dform-tag-filter-selected', className)}
    />
  );
}
