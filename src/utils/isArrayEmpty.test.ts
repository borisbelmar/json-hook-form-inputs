import isArrayEmpty from './isArrayEmpty'

describe('isArrayEmpty', () => {
  it('returns true when array is empty', () => {
    expect(isArrayEmpty([])).toBe(true)
  })

  it('returns false when array is not empty', () => {
    expect(isArrayEmpty(['a'])).toBe(false)
  })

  it('returns true when array is undefined', () => {
    expect(isArrayEmpty(undefined)).toBe(true)
  })

  it('returns true when array is null', () => {
    expect(isArrayEmpty(null)).toBe(true)
  })
})
