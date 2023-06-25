import { useController, useFormContext } from 'react-hook-form'
import getLayoutProps from '@/utils/getLayoutProps'
import getErrorMessage from '@/utils/getErrorMessage'
import type { FieldProps } from '@borisbelmar/json-hook-form'
import HookFormInputLayout from '../HookFormInputLayout'
import RadioItem from './components/RadioItem'

export default function HookFormRadio({
  field
}: FieldProps) {
  const { control, formState: { errors } } = useFormContext()
  const error = getErrorMessage(errors, field.name)
  const controller = useController({
    name: field.name,
    control
  })

  const { required, name, label, helpText, disabled } = getLayoutProps(field)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    controller.field.onChange(value)
  }

  const isChecked = (value: string) => {
    return controller.field.value === value
  }

  return (
    <HookFormInputLayout
      disabled={disabled === true}
      error={error}
      name={name}
      required={required}
      label={label}
      helpText={helpText}
      helpTextTop
    >
      <fieldset className="mt-2">
        {field.label && (
          <legend className="sr-only">{field.label}</legend>
        )}
        <div className="space-y-4">
          {field.options?.map(option => (
            <RadioItem
              key={option.value as string}
              label={option.label}
              helpText={option.helpText}
              name={field.name}
              checked={isChecked(option.value as string)}
              onChange={handleChange}
              value={option.value as string}
            />
          ))}
        </div>
      </fieldset>
    </HookFormInputLayout>
  )
}
