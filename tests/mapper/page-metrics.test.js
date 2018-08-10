import PageMetrics from '../../src/js/mapper/page-metrics.js'

test('Make page metrics class', () => {
  let pageMetrics = new PageMetrics([])

  expect(pageMetrics).toBeInstanceOf(PageMetrics)
})

test('Make page metrics class fail', () => {
  expect(() => {new PageMetrics()}).toThrow()
})

test('Get Tableau data fail', () => {
  let pageMetrics = new PageMetrics(null)

  expect(() => {pageMetrics.getTableauData()}).toThrow()
})
