import UrlParts from '../../../../src/js/service/facebook/helper/url-parts.js'

test('Split URL string', () => {
  let urlParts = new UrlParts

  let parts = urlParts.splitUrl('https://google.com?query=1', '?')

  expect(parts.length).toBe(2)
  expect(parts[0]).toBe('https://google.com')
  expect(parts[1]).toBe('query=1')
})

test('Split URL string fail', () => {
  let urlParts = new UrlParts

  let parts = urlParts.splitUrl('https://google.com?query=1', '#')

  expect(parts.length).toBe(1)
  expect(parts[0]).toBe('https://google.com?query=1')
})

test('Get Url Parts', () => {
  let urlParts = new UrlParts

  let parts = urlParts.getParts('https://facebook.com/#access_token=123&expires_in=456')

  expect(parts.url).toBe('https://facebook.com/')
  expect(parts.access_token).toBe('123')
  expect(parts.expires_in).toBe('456')
})

test('Get url query string part', () => {
  let urlParts = new UrlParts

  let part = urlParts.getPart('query=123', 'query')

  expect(part).toBe('123')
})
