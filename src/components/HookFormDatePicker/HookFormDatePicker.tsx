import clsx from 'clsx'
import { useCallback } from 'react'
import { useFormContext } from 'react-hook-form'
import getLayoutProps from '@/utils/getLayoutProps'
import getErrorMessage from '@/utils/getErrorMessage'
import type { FieldProps } from '@borisbelmar/json-hook-form'
import HookFormInputLayout from '../HookFormInputLayout'
import CalendarButtonPopover from './components/CalendarButtonPopover'

export default function HookFormDatePicker({ field }: FieldProps) {
  const { register, formState: { errors }, getValues, setValue } = useFormContext()
  const error = getErrorMessage(errors, field.name)

  const { label, helpText, required, name } = getLayoutProps(field)

  const handleDateChange = (selected: string) => {
    setValue(field.name, selected)
  }

  const getInitialValue = useCallback(() => {
    const value = getValues(field.name)
    return value || ''
  }, [field.name, getValues])

  return (
    <HookFormInputLayout
      label={label}
      name={name}
      required={required}
      helpText={helpText}
      error={error}
      disabled={field.disabled === true}
    >
      <div className="relative">
        <input
          id={field.name}
          type="date"
          placeholder={field.placeholder || ''}
          className={clsx(
            'appearance-none block w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm',
            'focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500',
            'dark:text-white text-gray-900',
            'border-gray-300 placeholder-gray-400 dark:border-gray-700 dark:placeholder-gray-500',
            'dark:bg-gray-900 bg-white',
            field.disabled && 'opacity-50'
          )}
          disabled={field.disabled === true}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register(field.name)}
        />
        <CalendarButtonPopover
          onDateChange={handleDateChange}
          onInitialValue={getInitialValue}
        />
      </div>
    </HookFormInputLayout>
  )
}
