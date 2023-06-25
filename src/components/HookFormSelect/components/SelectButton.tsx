import { Listbox } from '@headlessui/react'
import type { Option } from '@borisbelmar/json-hook-form'
import { ChevronUpDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'

interface Props {
  value?: Option | null
  placeholder?: string
  disabled?: boolean
}

export default function SelectButton({
  value,
  placeholder,
  disabled
}: Props) {
  return (
    <Listbox.Button className={clsx(
      'text-sm relative w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm',
      !disabled && 'bg-white dark:bg-gray-900',
      disabled && 'opacity-50 bg-gray-200 dark:bg-gray-700'
    )}>
      <span
        className={clsx('block truncate text-gray-900 dark:text-white', !value && 'opacity-50')}
      >
        {value?.label || value?.value as string || placeholder || 'Select an option'}
      </span>
      <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </span>
    </Listbox.Button>
  )
}
