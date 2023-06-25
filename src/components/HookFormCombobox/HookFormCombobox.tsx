import { Combobox } from '@headlessui/react'
import { useEffect, useState } from 'react'
import { useController, useFormContext } from 'react-hook-form'
import type { FieldProps, Option } from '@borisbelmar/json-hook-form'
import getErrorMessage from '@/utils/getErrorMessage'
import getLayoutProps from '@/utils/getLayoutProps'
import { getOptionByValue } from '@/utils/getOption'
import HookFormInputLayout from '../HookFormInputLayout'
import ComboboxInput from './components/ComboboxInput'
import ComboboxOptionList from './components/ComboboxOptionList'

export default function HookFormCombobox({ field }: FieldProps) {
  const { control, formState: { errors } } = useFormContext()
  const error = getErrorMessage(errors, field.name)
  const controller = useController({
    name: field.name,
    control
  })
  const { required, name, label, helpText } = getLayoutProps(field)

  const [query, setQuery] = useState('')
  const [selectedOption, setSelectedOption] = useState<Option>(
    getOptionByValue(field.options || [], controller.field.value || field.default)
    || { value: '', label: '' }
  )

  useEffect(() => {
    controller.field.onChange(selectedOption.value)
  }, [selectedOption, controller.field])

  return (
    <HookFormInputLayout
      error={error}
      name={name}
      required={required}
      label={label}
      helpText={helpText}
      disabled={field.disabled === true}
    >
      <Combobox
        as="div"
        value={selectedOption}
        onChange={setSelectedOption}
        className="relative"
        disabled={field.disabled === true}
      >
        <ComboboxInput
          onChange={event => setQuery(event.target.value)}
          disabled={field.disabled === true}
        />
        <ComboboxOptionList
          options={field.options || []}
          query={query}
        />
      </Combobox>
    </HookFormInputLayout>
  )
}
