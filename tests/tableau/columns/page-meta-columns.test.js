import PageMetaColumns from '../../../src/js/tableau/columns/page-meta-columns.js'
import dataType from '../../test-helper/tableau-data-type-enum.js'

test('Build page meta columns', () => {
  expect(new PageMetaColumns(dataType)).toBeInstanceOf(PageMetaColumns)
})

test('Get page metric columns', () => {
  let columns = new PageMetaColumns(dataType)

  expect(columns.getColumns().length).toBe(6)
})
