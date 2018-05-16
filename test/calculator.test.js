import stringCalculator from '../src/stringCalculator'

describe('The string calculator', () => {
  it('Sums numbers separated by comma in a text', () => {
    expect(stringCalculator('')).toEqual(0)
  })
})
