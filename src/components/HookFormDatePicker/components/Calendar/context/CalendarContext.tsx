import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react'
import formatDateLocaleISO from '../utils/formatDateLocaleISO'

interface CalendarContextReturn {
  selectedDate: string
  setSelectedDate: (date: string) => void
  year: number
  setYear: Dispatch<SetStateAction<number>>
  month: number
  setMonth: Dispatch<SetStateAction<number>>
  showYearPicker: boolean
  setShowYearPicker: Dispatch<SetStateAction<boolean>>
}

const CalendarContext = createContext<CalendarContextReturn | null>(null)

interface Props {
  children: React.ReactNode
  initialDate: string
  onDateChange: (date: string) => void
}

export function CalendarProvider({
  children,
  initialDate,
  onDateChange
}: Props) {
  const [selectedDate, setSelectedDate] = useState(initialDate || formatDateLocaleISO(new Date()))
  const [year, setYear] = useState(new Date(selectedDate).getFullYear())
  const [month, setMonth] = useState(new Date(selectedDate).getMonth())
  const [showYearPicker, setShowYearPicker] = useState(false)

  const handleDateChange = useCallback((date: string) => {
    setSelectedDate(date)
    onDateChange(date)
  }, [onDateChange])

  const value = useMemo(() => ({
    selectedDate,
    setSelectedDate: handleDateChange,
    year,
    setYear,
    month,
    setMonth,
    showYearPicker,
    setShowYearPicker
  }), [
    selectedDate,
    handleDateChange,
    year,
    setYear,
    month,
    setMonth,
    showYearPicker,
    setShowYearPicker
  ])

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  )
}

export function useCalendarContext() {
  const context = useContext(CalendarContext)

  if (!context) {
    throw new Error('useCalendarContext must be used within a CalendarProvider')
  }

  return context
}
