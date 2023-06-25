import type { Option } from '@borisbelmar/json-hook-form'
import { Combobox } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'

interface Props {
  opt: Option
}

export default function ComboboxOption({ opt }: Props) {
  return (
    <Combobox.Option
      value={opt}
      className={({ active }) => clsx(
        'relative cursor-default select-none py-2 pl-3 pr-9',
        active ? 'bg-primary-600 text-white' : 'text-gray-900 dark:text-white'
      )}
    >
      {({ active, selected }) => (
        <>
          <span className={clsx('block truncate', selected && 'font-semibold')}>{opt.label}</span>

          {selected && (
            <span
              className={clsx(
                'absolute inset-y-0 right-0 flex items-center pr-4',
                active ? 'text-white' : 'text-primary-600'
              )}
            >
              <CheckIcon className="h-5 w-5" aria-hidden="true" />
            </span>
          )}
        </>
      )}
    </Combobox.Option>
  )
}
