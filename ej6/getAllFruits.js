import { url } from './jsonServerBaseURL.js'

export async function getAllFruits () {
  const productsEndpoint = url + 'fruits'
  const response = await window.fetch(productsEndpoint)
  const data = await response.json()

  return data
}
