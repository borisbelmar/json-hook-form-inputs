import formatDateLocaleISO from './formatDateLocaleISO'

describe('formatDateLocaleISO', () => {
  it('should format the date correctly', () => {
    const testDate = new Date(2023, 3, 2) // Month is 0-based, so 3 represents April
    const formattedDate = formatDateLocaleISO(testDate)

    expect(formattedDate).toBe('2023-04-02')
  })

  it('should handle single-digit months and days correctly', () => {
    const testDate = new Date(2021, 0, 9) // Month is 0-based, so 0 represents January
    const formattedDate = formatDateLocaleISO(testDate)

    expect(formattedDate).toBe('2021-01-09')
  })
})
