import { Switch } from '@headlessui/react'
import clsx from 'clsx'
import { FieldValues, useController, useFormContext } from 'react-hook-form'
import type { Path } from 'react-hook-form'
import getErrorMessage from '@/utils/getErrorMessage'
import type { FieldProps } from '@borisbelmar/json-hook-form'
import HookFormInputLayout from './HookFormInputLayout'
import getLayoutProps from '../utils/getLayoutProps'

export default function HookFormInput({
  field
}: FieldProps) {
  const { control, formState: { errors } } = useFormContext()
  const controller = useController({
    name: field.name as Path<FieldValues>,
    control
  })
  const error = getErrorMessage(errors, field.name)
  const { required, name } = getLayoutProps(field)

  return (
    <HookFormInputLayout
      error={error}
      name={name}
    >
      <div className="flex items-center">
        <Switch
          checked={controller.field.value ?? false}
          onChange={controller.field.onChange}
          onBlur={controller.field.onBlur}
          className={clsx(
            controller.field.value ? 'bg-primary-600' : 'bg-gray-200 dark:bg-gray-700',
            field.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
            'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
          )}
          disabled={field.disabled === true}
        >
          <span
            aria-hidden="true"
            className={clsx(
              controller.field.value ? 'translate-x-5' : 'translate-x-0',
              'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
            )}
          />
        </Switch>
        <label htmlFor={field.name} className="ml-2">
          <p className="text-xs font-medium">
            {field.label}
            {required && <span className="text-primary-500">*</span>}
          </p>
          <p className="text-xs opacity-50">{field.helpText}</p>
        </label>
      </div>
    </HookFormInputLayout>
  )
}
