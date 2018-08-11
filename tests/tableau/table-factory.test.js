import TableFactory from '../../src/js/tableau/table-factory.js'
import Table from '../../src/js/tableau/table.js'
import PageMetaColumns from '../../src/js/tableau/columns/page-meta-columns.js'
import dataType from '../test-helper/tableau-data-type-enum.js'

test('Make a Tableau table object with table factory', () => {
  let pages = new PageMetaColumns(dataType)

  let tableFactory = new TableFactory

  expect(tableFactory.makeTable('pages', 'Facebook Pages', pages)).toBeInstanceOf(Table)
})
