import { url } from './jsonServerBaseURL.js'

/**
 * @param {string} description
 * @param {string} price
 */
export async function createNewFruit (description, price) {
  const productsEndpoint = url + 'fruits'
  const payload = {
    description,
    price
  }

  const response = await window.fetch(productsEndpoint, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
  const data = await response.json()

  return data
}
