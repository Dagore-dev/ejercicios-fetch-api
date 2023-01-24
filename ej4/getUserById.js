/**
 * @param {string} userId 
 */
export async function getUserById (userId) {
  const url = `https://jsonplaceholder.typicode.com/users?id=${userId}`

  const response = await window.fetch(url)
  const data = await response.json()

  return data[0]
}
