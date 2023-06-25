import useCalendar from '../hooks/useCalendar'
import formatDateLocaleISO from '../utils/formatDateLocaleISO'
import CalendarBottomButton from './CalendarBottomButton'

export default function CalendarButtons() {
  const { setSelectedDate, setMonth, setYear, selectedDate } = useCalendar()

  const handleResetClick = () => {
    setSelectedDate('')
  }

  const handleTodayClick = () => {
    const today = formatDateLocaleISO(new Date())
    setSelectedDate(today)
    setMonth(Number(today.split('-')[1]) - 1)
    setYear(Number(today.split('-')[0]))
  }

  return (
    <div className="flex justify-between mt-2">
      <CalendarBottomButton
        onClick={handleResetClick}
      >
        Reset
      </CalendarBottomButton>
      <CalendarBottomButton
        primary
        onClick={handleTodayClick}
        disabled={selectedDate === formatDateLocaleISO(new Date())}
      >
        Today
      </CalendarBottomButton>
    </div>
  )
}
