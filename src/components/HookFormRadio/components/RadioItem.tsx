import clsx from 'clsx'
import { useId } from 'react'

interface Props {
  value: string
  label: string
  helpText?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  checked: boolean
  name: string
  disabled?: boolean
}

export default function RadioItem({
  label,
  helpText,
  value,
  onChange,
  checked,
  name,
  disabled
}: Props) {
  const inputId = useId()
  const helpTextId = useId()

  return (
    <label htmlFor={inputId} className="relative flex items-start">
      <input
        id={inputId}
        aria-describedby={helpTextId}
        value={value}
        type="radio"
        checked={checked}
        name={name}
        className={clsx(
          'h-4 w-4 border-gray-500 text-primary-500 focus:ring-primary-500',
          !checked && 'bg-white dark:bg-gray-800',
          disabled && 'opacity-50 cursor-not-allowed'
        )}
        onChange={onChange}
        disabled={disabled}
      />
      <div className="ml-3 text-sm leading-2 -mt-1">
        <p className="font-medium">
          {label}
        </p>
        {helpText && (
          <p id={helpTextId} className="opacity-50">
            {helpText}
          </p>
        )}
      </div>
    </label>
  )
}
