import { ReactNode, useCallback, useState } from 'react';
import clsx from 'clsx';

interface IFilter<T> {
  name: ReactNode;
  condition: (val: T) => boolean;
}

interface IFilterElementProps {
  children: ReactNode;
  onClick: React.MouseEventHandler<HTMLElement>;
  selected: boolean;
}

interface IProps<T> extends React.HTMLAttributes<HTMLDivElement> {
  data: T[];
  setFilteredData: (val: T[]) => void;
  filters: IFilter<T>[];
  FilterElement: (props: IFilterElementProps) => JSX.Element;
}

export function Filter<T>({
  data,
  setFilteredData,
  filters,
  FilterElement,
  className,
  ...props
}: IProps<T>) {
  const [appliedFilters, setAppliedFilters] = useState<number[]>([]);

  const toggleApplyFilter = useCallback(
    (idx: number) => {
      const isExist = typeof appliedFilters.find((filterIdx) => filterIdx === idx) !== 'undefined';

      let newFilters: number[];

      if (isExist) {
        newFilters = appliedFilters.filter((filterIdx) => filterIdx !== idx);
      } else {
        newFilters = [...appliedFilters, idx];
      }

      setAppliedFilters(newFilters);

      let newData: T[] = [];

      if (newFilters.length) {
        newFilters.forEach((filterIdx) => {
          const filter = filters[filterIdx];

          const newValues = data.filter(filter.condition);

          newData.push(...newValues);
        });
      } else {
        newData = data;
      }

      setFilteredData(newData);
    },
    [appliedFilters],
  );

  return (
    <div {...props} className={clsx('dform-filter', className)}>
      {filters.map((filter, index) => (
        <FilterElement
          key={index}
          onClick={() => toggleApplyFilter(index)}
          selected={typeof appliedFilters.find((filterIdx) => filterIdx === index) !== 'undefined'}
        >
          {filter.name}
        </FilterElement>
      ))}
    </div>
  );
}
