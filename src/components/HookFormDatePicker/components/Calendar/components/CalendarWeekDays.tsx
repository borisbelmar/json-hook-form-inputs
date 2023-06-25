import { memo } from 'react'
import { weekdays } from '../config/defaultLocales'

/* eslint-disable react/no-array-index-key */
function CalendarWeekDays() {
  return (
    <div className="mt-2 grid grid-cols-7 text-center text-xs leading-6 text-gray-300">
      {weekdays.map((day, idx) => (
        <div key={`${day}-${idx}`}>
          {day}
        </div>
      ))}
    </div>
  )
}

export default memo(CalendarWeekDays)
