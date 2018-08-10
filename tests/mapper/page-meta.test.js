import PageMeta from '../../src/js/mapper/page-meta.js'

test('Make page meta class', () => {
  let pageMeta = new PageMeta([])

  expect(pageMeta).toBeInstanceOf(PageMeta)
})

test('Make page meta class fail', () => {
  expect(() => {new PageMeta()}).toThrow()
})

test('Get Tableau data fail', () => {
  let pageMeta = new PageMeta(null)

  expect(() => {pageMeta.getTableauData()}).toThrow()
})
