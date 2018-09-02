import DateTime from '../../src/js/helper/date-time.js'

test('Get date time object', () => {
  let date = new DateTime()

  expect(date.getDate()).toBeInstanceOf(Date)
})

test('Get unix timestamp', () => {
  let date = new DateTime()

  expect(date.getUnixTimestamp()).toBe(Math.floor(Date.now() / 1000))
})

test('Get timestamp minus days', () => {
  let date = new DateTime()

  expect(date.getUnixTimestampMinusDays(3)).toBe(date.getUnixTimestamp() - (3 * 24 * 3600))
})

test('Convert one day to seconds', () => {
  let date = new DateTime()

  expect(date.convertDaysToSeconds(1)).toBe(3600*24)
})

test('Convert zero days to seconds', () => {
  let date = new DateTime()

  expect(date.convertDaysToSeconds(0)).toBe(0)
})

test('Convert five days to seconds', () => {
  let date = new DateTime()

  expect(date.convertDaysToSeconds(5)).toBe((3600*24)*5)
})

test('Get tableau time string', () => {
  let date = new DateTime()

  expect(date.getTableauTimeString('2018-08-05T07:00:00+0000')).toBe('2018-08-05 07:00:00')
})

test('Get tableau time string convert zero', () => {
  let date = new DateTime()

  expect(() => {date.getTableauTimeString('0')}).toThrow()
})

test('Get tableau time string convert empty', () => {
  let date = new DateTime()

  expect(() => {date.getTableauTimeString('')}).toThrow()
})
