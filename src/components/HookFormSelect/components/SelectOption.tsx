import { CheckIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import type { Option } from '@borisbelmar/json-hook-form'

interface Props {
  opt: Option
  selected: boolean
  active: boolean
}

export default function SelectOption({ opt, selected, active }: Props) {
  return (
    <div className={clsx(
      active ? 'text-white bg-primary-600' : 'text-gray-900 dark:text-white',
      'cursor-default select-none relative py-2 pl-3 pr-9 text-sm'
    )}>
      <span className={clsx(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
        {opt.label}
      </span>
      {selected ? (
        <span
          className={clsx(
            active ? 'text-white' : 'text-primary-600',
            'absolute inset-y-0 right-0 flex items-center pr-4'
          )}
        >
          <CheckIcon className="h-5 w-5" aria-hidden="true" />
        </span>
      ) : null}
    </div>
  )
}
