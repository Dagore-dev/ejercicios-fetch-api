import { geolocationInfo } from "./getGeolocationInfo.js"

window.addEventListener('DOMContentLoaded', main)

async function main () {
  const geolocationInfoParagraph = document.getElementById('geolocation-info')

  try {
    const info = await geolocationInfo()
    const { data } = info

    geolocationInfoParagraph.textContent = `País: ${data.location.country.name_translated}, Ciudad: ${data.location.city.name_translated}, Código postal: ${data.location.zip}, IP: ${data.ip}`
  } catch (e) {
    geolocationInfoParagraph.textContent = e.message
  }
}
