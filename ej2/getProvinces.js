export async function getProvinces () {
  const url = 'https://apis.datos.gob.ar/georef/api/provincias'
  const response = await window.fetch(url)
  const data = await response.json()

  return data.provincias
}
