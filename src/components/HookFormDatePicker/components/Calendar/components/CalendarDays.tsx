import { useCallback, useMemo } from 'react'
import useCalendar from '../hooks/useCalendar'
import generateDays, { CalendarDay } from '../utils/generateDays'
import CalendarDayButton from './CalendarDayButton'

interface Day extends CalendarDay {
  isSelected?: boolean
}

export default function CalendarDays() {
  const { year, month, selectedDate, setSelectedDate, setMonth } = useCalendar()
  const days: Day[] = useMemo(() => generateDays(year, month), [year, month])

  const daysWithSelected = useMemo(() => days.map(
    day => ((day.date === selectedDate) ? { ...day, isSelected: true } : day)
  ), [days, selectedDate])

  const handleDayClick = useCallback((date: string) => {
    const dateMonth = Number(date.split('-')[1]) - 1
    setSelectedDate(date)
    if (month !== dateMonth) {
      setMonth(dateMonth)
    }
  }, [month, setMonth, setSelectedDate])

  return (
    <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-md bg-gray-200 dark:bg-gray-700 text-sm shadow ring-1 ring-gray-200 dark:ring-gray-700">
      {daysWithSelected.map((day, dayIdx) => (
        <CalendarDayButton
          key={day.date}
          isCurrentMonth={!!day.isCurrentMonth}
          isSelected={!!day.isSelected}
          isToday={!!day.isToday}
          daysLength={days.length}
          idx={dayIdx}
          date={day.date}
          onClick={handleDayClick}
        />
      ))}
    </div>
  )
}
