import { useController, useFormContext } from 'react-hook-form'
import { useEffect, useState } from 'react'
import getLayoutProps from '@/utils/getLayoutProps'
import getErrorMessage from '@/utils/getErrorMessage'
import { getOptionByValue } from '@/utils/getOption'
import type { FieldProps, Option } from '@borisbelmar/json-hook-form'
import SelectBox from './components/SelectBox'
import HookFormInputLayout from '../HookFormInputLayout'

export default function HookFormInput({
  field
}: FieldProps) {
  const { control, formState: { errors } } = useFormContext()
  const error = getErrorMessage(errors, field.name)
  const controller = useController({
    name: field.name,
    control
  })
  const { required, name, label, helpText, disabled } = getLayoutProps(field)

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
      disabled={disabled === true}
    >
      <SelectBox
        options={field.options || []}
        value={selectedOption}
        onChange={setSelectedOption}
        disabled={field.disabled === true}
        placeholder={field.placeholder}
      />
    </HookFormInputLayout>
  )
}
