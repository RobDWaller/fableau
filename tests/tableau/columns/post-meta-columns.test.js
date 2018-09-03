import PostMetaColumns from '../../../src/js/tableau/columns/post-meta-columns.js'
import dataType from '../../test-helper/tableau-data-type-enum.js'

test('Build post meta columns', () => {
  expect(new PostMetaColumns(dataType)).toBeInstanceOf(PostMetaColumns)
})

test('Get post meta columns', () => {
  let columns = new PostMetaColumns(dataType)

  expect(columns.getColumns().length).toBe(4)
})
