import PostMetricColumns from '../../../src/js/tableau/columns/post-metric-columns.js'
import dataType from '../../test-helper/tableau-data-type-enum.js'

test('Build post metric columns', () => {
  expect(new PostMetricColumns(dataType)).toBeInstanceOf(PostMetricColumns)
})

test('Get post metric columns', () => {
  let columns = new PostMetricColumns(dataType)

  expect(columns.getColumns().length).toBe(15)
})
