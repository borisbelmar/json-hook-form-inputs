import useCalendar from '../hooks/useCalendar'
import CalendarBottomButtons from './CalendarBottomButtons'
import CalendarDays from './CalendarDays'
import CalendarHeader from './CalendarHeader'
import CalendarLayout from './CalendarLayout'
import CalendarMonthPicker from './CalendarMonthPicker'
import CalendarWeekDays from './CalendarWeekDays'
import CalendarYearPicker from './CalendarYearPicker'

export default function CalendarDatePicker() {
  const { showYearPicker } = useCalendar()
  return (
    <CalendarLayout>
      {showYearPicker ? (
        <>
          <CalendarYearPicker />
          <CalendarMonthPicker />
        </>
      ) : (
        <>
          <CalendarHeader />
          <CalendarWeekDays />
          <CalendarDays />
        </>
      )}
      <CalendarBottomButtons />
    </CalendarLayout>
  )
}
