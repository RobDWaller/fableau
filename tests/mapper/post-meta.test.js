import PostMeta from '../../src/js/mapper/post-meta.js'

test('Make post meta class', () => {
  let postMeta = new PostMeta([])

  expect(postMeta).toBeInstanceOf(PostMeta)
})

test('Make post meta class fail', () => {
  expect(() => {new PostMeta()}).toThrow()
})

test('Get Tableau data fail', () => {
  let postMeta = new PostMeta(null)

  expect(() => {postMeta.getTableauData()}).toThrow()
})
