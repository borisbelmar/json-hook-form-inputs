import type { Option } from '@borisbelmar/json-hook-form'
import { Combobox } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
}

export default function ComboboxInput({ onChange, disabled }: Props) {
  return (
    <>
      <Combobox.Input
        className={clsx(
          'text-sm relative w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm',
          !disabled && 'bg-white dark:bg-gray-900',
          disabled && 'opacity-50 bg-gray-200 dark:bg-gray-700'
        )}
        onChange={onChange}
        displayValue={(opt: Option) => opt?.label || opt?.value as string || ''}
      />
      <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
        <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </Combobox.Button>
    </>
  )
}
