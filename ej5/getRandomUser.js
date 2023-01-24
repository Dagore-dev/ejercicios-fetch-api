export async function getRandomUser () {
  const url = 'https://randomuser.me/api/'
  const response = await window.fetch(url)
  const data = await response.json()

  return data.results
}
