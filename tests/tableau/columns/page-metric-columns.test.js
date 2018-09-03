import PageMetricColumns from '../../../src/js/tableau/columns/page-metric-columns.js'
import dataType from '../../test-helper/tableau-data-type-enum.js'

test('Build page metric columns', () => {
  expect(new PageMetricColumns(dataType)).toBeInstanceOf(PageMetricColumns)
})

test('Get page metric columns', () => {
  let columns = new PageMetricColumns(dataType)

  expect(columns.getColumns().length).toBe(56)
})
