export async function geolocationInfo () {
  
  const url = 'https://api.ipbase.com/v2/info?apikey=LpM2APBv1D386IKKt67bccayudzVm0bYdYUKaord&language=es'
  const response = await window.fetch(url)
  const data = await response.json()

  return data
}
