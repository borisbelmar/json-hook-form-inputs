import clsx from 'clsx'
import { memo } from 'react'
import { months } from '../config/defaultLocales'
import useCalendar from '../hooks/useCalendar'

function CalendarMonthPicker() {
  const { setMonth, closeYearPicker, month: selectedMonth } = useCalendar()

  const handleClick = (month: number) => {
    setMonth(month)
    closeYearPicker()
  }

  return (
    <div className="isolate mt-2 grid grid-cols-3 gap-px rounded-md bg-gray-200 dark:bg-gray-700 text-sm shadow ring-1 ring-gray-200 dark:ring-gray-700">
      {months.map((month, idx) => (
        <button
          key={month}
          type="button"
          onClick={() => handleClick(idx)}
          className={clsx(
            'flex items-center justify-center flex-0 text-xs dark:text-white dark:bg-gray-900 bg-white text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 py-2 px-2.5',
            idx === 0 && 'rounded-tl-md',
            idx === 2 && 'rounded-tr-md',
            idx === 9 && 'rounded-bl-md',
            idx === 11 && 'rounded-br-md',
            idx === selectedMonth && 'bg-primary-500 dark:bg-primary-500 text-gray-900 dark:text-white'
          )}
        >
          {month}
        </button>
      ))}
    </div>
  )
}

export default memo(CalendarMonthPicker)
