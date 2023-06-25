import formatDateLocaleISO from './formatDateLocaleISO'
import generateDays from './generateDays'

describe('generateDays', () => {
  it('should generate days correctly for a given month and year', () => {
    const year = 2022
    const month = 0 // January (months are zero-based in JavaScript)
    const days = generateDays(year, month)

    // Test the length of the generated array
    expect(days.length).toBe(42)

    // Test if the first and last days of the current month are correct
    expect(days.find(day => day.isCurrentMonth)?.date).toBe('2022-01-01')
    expect(days.reverse().find(day => day.isCurrentMonth)?.date).toBe('2022-01-31')
  })

  it('should mark the actual day correctly', () => {
    const year = new Date().getFullYear()
    const month = new Date().getMonth()
    const days = generateDays(year, month)

    const actualDay = formatDateLocaleISO(new Date())

    expect(days.find(day => day.isToday)?.date).toBe(actualDay)
  })
})
