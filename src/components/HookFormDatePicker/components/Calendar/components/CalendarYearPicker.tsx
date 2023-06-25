import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { memo } from 'react'
import useCalendar from '../hooks/useCalendar'

function CalendarYearPicker() {
  const { incrementYear, decrementYear, year } = useCalendar()
  return (
    <div className="flex items-center justify-between text-center text-gray-900">
      <button
        type="button"
        onClick={decrementYear}
        className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
      >
        <span className="sr-only">
          Previous month
        </span>
        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
      </button>
      <p
        className="flex-0 text-sm font-semibold dark:text-white text-gray-900 py-1.5 px-2.5 rounded-md"
      >
        {year}
      </p>
      <button
        type="button"
        onClick={incrementYear}
        className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
      >
        <span className="sr-only">
          Next month
        </span>
        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  )
}

export default memo(CalendarYearPicker)
