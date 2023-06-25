import { useFormContext } from 'react-hook-form'
import clsx from 'clsx'
import getLayoutProps from '@/utils/getLayoutProps'
import getErrorMessage from '@/utils/getErrorMessage'
import type { FieldProps } from '@borisbelmar/json-hook-form'
import HookFormInputLayout from './HookFormInputLayout'

export default function HookFormTextArea({
  field
}: FieldProps) {
  const { formState: { errors }, register } = useFormContext()
  const { label, helpText, required, name, disabled } = getLayoutProps(field)

  const error = getErrorMessage(errors, field.name)

  return (
    <HookFormInputLayout
      label={label}
      helpText={helpText}
      error={error}
      required={required}
      name={name}
      disabled={disabled as boolean}
    >
      <textarea
        id={field.name}
        placeholder={field.placeholder || ''}
        className={clsx(
          'appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm',
          'dark:text-white text-gray-900',
          'border-gray-300 placeholder-gray-400 dark:border-gray-700 dark:placeholder-gray-500',
          'dark:bg-gray-900 bg-white',
          field.disabled && 'opacity-50'
        )}
        disabled={field.disabled === true}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register(field.name)}
      />
    </HookFormInputLayout>
  )
}
