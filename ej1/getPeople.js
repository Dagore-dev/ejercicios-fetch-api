export async function getPeople () {
  const url = 'https://swapi.dev/api/people/'
  const response = await window.fetch(url)
  const data = await response.json()

  return data.results
}
