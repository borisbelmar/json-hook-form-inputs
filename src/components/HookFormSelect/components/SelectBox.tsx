import { Listbox } from '@headlessui/react'
import type { Option } from '@borisbelmar/json-hook-form'
import SelectButton from './SelectButton'
import SelectOptionList from './SelectOptionList'

interface Props {
  options: Option[]
  value: Option
  onChange: (selected: Option) => void
  disabled?: boolean
  placeholder?: string
}

export default function SelectBox({
  options,
  value,
  placeholder,
  onChange,
  disabled
}: Props) {
  return (
    <Listbox value={value} onChange={onChange} disabled={disabled}>
      {({ open }) => (
        <div className="w-full">
          <div className="relative">
            <SelectButton
              value={value}
              placeholder={placeholder}
              disabled={disabled}
            />
            <SelectOptionList
              options={options}
              open={open}
            />
          </div>
        </div>
      )}
    </Listbox>
  )
}
