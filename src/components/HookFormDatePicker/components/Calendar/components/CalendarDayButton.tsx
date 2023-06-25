import clsx from 'clsx'
import { memo } from 'react'

interface Props {
  isCurrentMonth: boolean
  isSelected: boolean
  isToday: boolean
  daysLength: number
  date: string
  idx: number
  onClick: (date: string) => void
}

function CalendarDayButton({
  isCurrentMonth,
  isSelected,
  isToday,
  daysLength,
  date,
  idx,
  onClick
}: Props) {
  return (
    <button
      type="button"
      onClick={() => onClick(date)}
      className={clsx(
        'py-1.5 hover:bg-gray-100 hover:dark:bg-gray-800 focus:z-10',
        isCurrentMonth ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-600',
        (isSelected || isToday) && 'font-semibold',
        isSelected && 'text-white',
        !isSelected && isCurrentMonth && !isToday && 'text-gray-900 dark:text-white',
        !isSelected && !isCurrentMonth && !isToday && 'text-gray-400',
        isToday && !isSelected && 'text-primary-600',
        idx === 0 && 'rounded-tl-md',
        idx === 6 && 'rounded-tr-md',
        idx === daysLength - 7 && 'rounded-bl-md',
        idx === daysLength - 1 && 'rounded-br-md'
      )}
    >
      <time
        dateTime={date}
        className={clsx(
          'mx-auto flex h-7 w-7 items-center justify-center rounded-full',
          isSelected && 'bg-primary-600 text-white'
        )}
      >
        {date.split('-').pop()?.replace(/^0/, '')}
      </time>
    </button>
  )
}

export default memo(CalendarDayButton)
