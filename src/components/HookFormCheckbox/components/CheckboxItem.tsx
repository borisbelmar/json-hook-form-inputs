import clsx from 'clsx'
import { useId } from 'react'

interface Props {
  value: string
  label: string
  helpText?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  checked: boolean
  disabled?: boolean
}

export default function CheckboxItem({
  label,
  helpText,
  value,
  onChange,
  checked,
  disabled
}: Props) {
  const inputId = useId()
  const helpTextId = useId()

  return (
    <label htmlFor={inputId} className="relative flex items-start">
      <div className="flex h-6 items-center">
        <input
          id={inputId}
          aria-describedby={helpTextId}
          value={value}
          type="checkbox"
          className={clsx(
            'h-4 w-4 rounded border-gray-500 text-primary-500 focus:ring-primary-500',
            !checked && 'bg-white dark:bg-gray-800',
            disabled && 'opacity-50 cursor-not-allowed'
          )}
          disabled={disabled}
          onChange={onChange}
        />
      </div>
      <div className="ml-3 text-sm leading-2">
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
