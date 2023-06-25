import { Listbox, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import type { Option } from '@borisbelmar/json-hook-form'
import SelectOption from './SelectOption'

interface Props {
  options: Option[]
  open: boolean
}

export default function SelectOptionList({ options, open }: Props) {
  return (
    <Transition
      show={open}
      as={Fragment}
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Listbox.Options
        static
        className="absolute z-10 mt-1 w-full border bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800 shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-primary-500 ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
      >
        {options.map(opt => (
          <Listbox.Option
            key={opt.value as unknown as string}
            value={opt}
          >
            {({ selected, active }) => (
              <SelectOption
                selected={selected}
                active={active}
                opt={opt}
              />
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Transition>
  )
}
