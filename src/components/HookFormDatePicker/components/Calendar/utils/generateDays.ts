import formatDateLocaleISO from './formatDateLocaleISO'

export interface CalendarDay {
  date: string
  isCurrentMonth?: boolean
  isToday?: boolean
}

export default function generateDays(year: number, month: number): CalendarDay[] {
  const firstDayOfMonth = new Date(year, month, 1)
  const lastDayOfMonth = new Date(year, month + 1, 0)
  const firstDayOfWeek = firstDayOfMonth.getDay()
  const lastDayOfWeek = lastDayOfMonth.getDay()
  const actualDay = formatDateLocaleISO(new Date())

  const prevMonthDays = Array.from({ length: firstDayOfWeek }, (_, i) => {
    const prevMonthDay = new Date(year, month, -i)
    return { date: formatDateLocaleISO(prevMonthDay) }
  }).reverse()

  const currentMonthDays = Array.from({ length: lastDayOfMonth.getDate() }, (_, i) => {
    const currentMonthDay = new Date(year, month, i + 1)
    return { date: formatDateLocaleISO(currentMonthDay), isCurrentMonth: true }
  })

  const nextMonthDays = Array.from({ length: 6 - lastDayOfWeek }, (_, i) => {
    const nextMonthDay = new Date(year, month + 1, i + 1)
    return { date: formatDateLocaleISO(nextMonthDay) }
  })

  const allDays = [...prevMonthDays, ...currentMonthDays, ...nextMonthDays]

  return allDays.map(day => {
    return {
      ...day,
      isToday: day.date === actualDay
    }
  })
}
