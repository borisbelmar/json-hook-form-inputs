import { useCallback } from 'react'
import { useCalendarContext } from '../context/CalendarContext'

export default function useCalendar() {
  const {
    selectedDate,
    setSelectedDate,
    year,
    setYear,
    month,
    setMonth,
    showYearPicker,
    setShowYearPicker
  } = useCalendarContext()

  const incrementMonth = useCallback(() => {
    setMonth(prevMonth => {
      if (prevMonth === 11) {
        setYear(prevYear => prevYear + 1)
        return 0
      }
      return prevMonth + 1
    })
  }, [setMonth, setYear])

  const decrementMonth = useCallback(() => {
    setMonth(prevMonth => {
      if (prevMonth === 0) {
        setYear(prevYear => prevYear - 1)
        return 11
      }
      return prevMonth - 1
    })
  }, [setMonth, setYear])

  const incrementYear = useCallback(() => {
    setYear(prevYear => prevYear + 1)
  }, [setYear])

  const decrementYear = useCallback(() => {
    setYear(prevYear => prevYear - 1)
  }, [setYear])

  const openYearPicker = useCallback(() => {
    setShowYearPicker(true)
  }, [setShowYearPicker])

  const closeYearPicker = useCallback(() => {
    setShowYearPicker(false)
  }, [setShowYearPicker])

  return {
    selectedDate,
    setSelectedDate,
    year,
    setYear,
    month,
    setMonth,
    incrementMonth,
    decrementMonth,
    incrementYear,
    decrementYear,
    showYearPicker,
    openYearPicker,
    closeYearPicker
  }
}
