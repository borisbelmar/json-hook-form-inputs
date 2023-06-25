import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid'
import getLayoutProps from '@/utils/getLayoutProps'
import getErrorMessage from '@/utils/getErrorMessage'
import clsx from 'clsx'
import type { FieldProps } from '@borisbelmar/json-hook-form'
import HookFormInputLayout from './HookFormInputLayout'

export default function HookFormInput({
  field
}: FieldProps) {
  const { register, formState: { errors } } = useFormContext()
  const error = getErrorMessage(errors, field.name)

  const [show, setShow] = useState(false)
  const [localType, setLocalType] = useState(field.textType || 'text')

  const handleShowToggle = () => {
    setShow(prev => !prev)
    setLocalType(prevType => (
      prevType === 'password' ? 'text' : 'password'
    ))
  }

  const Icon = show ? EyeSlashIcon : EyeIcon

  const { label, helpText, required, name, disabled } = getLayoutProps(field)

  return (
    <HookFormInputLayout
      label={label}
      name={name}
      disabled={disabled === true}
      required={required}
      helpText={helpText}
      error={error}
    >
      <div className="relative">
        <input
          id={field.name}
          type={localType}
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
        {field.textType === 'password' && (
          <button
            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer focus:outline-none"
            onClick={handleShowToggle}
            type="button"
          >
            <Icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </button>
        )}
      </div>
    </HookFormInputLayout>
  )
}
