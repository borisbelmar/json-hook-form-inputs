import { memo } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import useCalendar from '../hooks/useCalendar'
import { months } from '../config/defaultLocales'

function CalendarHeader() {
  const { month, year, incrementMonth, decrementMonth, openYearPicker } = useCalendar()
  return (
    <div className="flex items-center justify-between text-center text-gray-900">
      <button
        type="button"
        onClick={decrementMonth}
        className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
      >
        <span className="sr-only">
          Previous month
        </span>
        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={openYearPicker}
        className="flex-0 text-sm font-semibold dark:text-white text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 py-1.5 px-2.5 rounded-md"
      >
        {months[month]} {year}
      </button>
      <button
        type="button"
        onClick={incrementMonth}
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

export default memo(CalendarHeader)
