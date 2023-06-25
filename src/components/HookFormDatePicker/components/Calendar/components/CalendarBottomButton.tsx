import clsx from 'clsx'

interface Props {
  onClick: () => void
  children: React.ReactNode
  disabled?: boolean
  primary?: boolean
}

export default function CalendarBottomButton({
  onClick,
  children,
  disabled,
  primary
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'flex items-center justify-center',
        primary ? 'bg-primary-600 text-white' : 'bg-white dark:bg-gray-800',
        primary ? 'hover:bg-primary-700' : 'hover:bg-gray-100 dark:hover:bg-gray-700',
        'px-4 py-2 rounded-md text-sm font-medium',
        disabled && 'opacity-50 cursor-not-allowed'
      )}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
