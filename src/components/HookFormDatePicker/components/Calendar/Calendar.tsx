import CalendarDatePicker from './components/CalendarDatePicker'
import { CalendarProvider } from './context/CalendarContext'
import formatDateLocaleISO from './utils/formatDateLocaleISO'

interface Props {
  onInitialValue: () => string
  onDateChange: (date: string) => void
}

export default function Calendar({
  onInitialValue,
  onDateChange
}: Props) {
  const handleDateChange = (date: string) => {
    onDateChange(date)
  }

  return (
    <CalendarProvider
      initialDate={onInitialValue() || formatDateLocaleISO(new Date())}
      onDateChange={handleDateChange}
    >
      <CalendarDatePicker />
    </CalendarProvider>
  )
}
