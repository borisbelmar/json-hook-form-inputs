import type { Option } from '@borisbelmar/json-hook-form'
import { Combobox } from '@headlessui/react'
import { useMemo } from 'react'
import filterOptions from '../utils/filterOptions'
import ComboboxEmpty from './ComboboxEmpty'
import ComboboxOption from './ComboboxOption'

interface Props {
  options: Option[]
  query: string
}

export default function ComboboxOptionList({ options, query }: Props) {
  const filteredOptions = useMemo(() => (
    query === ''
      ? options
      : filterOptions(options, query)
  ), [options, query])

  return (
    <Combobox.Options className="absolute z-10 mt-1 w-full border bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800 shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-primary-500 ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
      {filteredOptions.length === 0 && (
        <ComboboxEmpty />
      )}
      {filteredOptions.map(opt => (
        <ComboboxOption key={opt.value as unknown as string} opt={opt} />
      ))}
    </Combobox.Options>
  )
}
