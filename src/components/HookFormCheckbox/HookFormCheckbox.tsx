import { useController, useFormContext } from 'react-hook-form'
import type { FieldProps } from '@borisbelmar/json-hook-form'
import getLayoutProps from '@/utils/getLayoutProps'
import getErrorMessage from '@/utils/getErrorMessage'
import HookFormInputLayout from '../HookFormInputLayout'
import CheckboxItem from './components/CheckboxItem'

export default function HookFormCheckbox({
  field
}: FieldProps) {
  const { control, formState: { errors } } = useFormContext()
  const error = getErrorMessage(errors, field.name)

  const controller = useController({
    name: field.name,
    control
  })
  const { required, name, label, helpText } = getLayoutProps(field)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target
    if (checked) {
      controller.field.onChange([...(controller.field.value || []), value])
    } else {
      controller.field.onChange((controller.field.value || []).filter((v: string) => v !== value))
    }
  }

  const isChecked = (value: string) => {
    return controller.field.value?.includes(value)
  }

  return (
    <HookFormInputLayout
      error={error}
      name={name}
      required={required}
      label={label}
      helpText={helpText}
      disabled={field.disabled === true}
      helpTextTop
    >
      <fieldset className="mt-2">
        {field.label && (
          <legend className="sr-only">{field.label}</legend>
        )}
        <div className="space-y-4">
          {field.options?.map(option => (
            <CheckboxItem
              key={option.value as string}
              label={option.label}
              helpText={option.helpText}
              checked={isChecked(option.value as string)}
              onChange={handleChange}
              value={option.value as string}
              disabled={field.disabled === true}
            />
          ))}
        </div>
      </fieldset>
    </HookFormInputLayout>
  )
}
