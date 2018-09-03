import Table from '../../src/js/tableau/table.js'
import PageMetaColumns from '../../src/js/tableau/columns/page-meta-columns.js'
import dataType from '../test-helper/tableau-data-type-enum.js'

test('Make a Tableau table object', () => {
  let pages = new PageMetaColumns(dataType)

  let table = new Table('pages', 'Facebook Pages', pages)

  let result = table.getTable()

  expect(result.id).toBe('pages')
  expect(result.alias).toBe('Facebook Pages')
  expect(result.columns.length).toBe(6)
})
