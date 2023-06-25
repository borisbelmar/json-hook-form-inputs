import { ArrowUpTrayIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useId } from 'react'

interface Props {
  isDraggingOver: boolean
  multiple?: boolean
  label?: string
  helpText?: string
  accept?: string
  name?: string
  disabled?: boolean
  hideIcon?: boolean
}

export default function DropZone({
  isDraggingOver,
  multiple,
  label,
  helpText,
  accept,
  name,
  disabled,
  hideIcon
}: Props) {
  const id = useId()

  return (
    <div
      className={clsx(
        'flex justify-center rounded-md border-2 border-dashed border-gray-300 dark:border-gray-700 px-6 pt-5 pb-6',
        isDraggingOver ? 'border-primary-500' : 'hover:border-gray-400 dark:hover:border-gray-600',
        disabled && 'opacity-50 cursor-not-allowed'
      )}
    >
      <div className="space-y-1 text-center">
        {!hideIcon && (
          <ArrowUpTrayIcon
            className="mx-auto h-12 w-12 text-gray-400"
          />
        )}
        <div className="text-sm text-gray-600 text-center">
          <label
            htmlFor={id}
            className="relative cursor-pointer rounded-md font-medium text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 hover:text-primary-500"
          >
            <span>
              {label || 'Upload a file or drag and drop'}
            </span>
            <input
              id={id}
              name={name}
              type="file"
              className="sr-only"
              multiple={multiple}
              accept={accept}
              disabled={disabled}
            />
          </label>
        </div>
        {helpText && (
          <p className="text-xs text-gray-500 text-center">
            {helpText}
          </p>
        )}
      </div>
    </div>
  )
}
