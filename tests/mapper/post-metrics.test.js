import PostMetrics from '../../src/js/mapper/post-metrics.js'

test('Make post metrics class', () => {
  let postMetrics = new PostMetrics([])

  expect(postMetrics).toBeInstanceOf(PostMetrics)
})

test('Make post metrics class fail', () => {
  expect(() => {new PostMetrics()}).toThrow()
})

test('Get Tableau data fail', () => {
  let postMetrics = new PostMetrics(null)

  expect(() => {postMetrics.getTableauData()}).toThrow()
})
