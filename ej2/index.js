import { getProvinces } from './getProvinces.js'
import { updateProvincesList } from './updateProvincesList.js'

window.addEventListener('DOMContentLoaded', main)

async function main () {
  const listUl = document.getElementById('province-list')

  try {
    const provinces = await getProvinces()
    updateProvincesList(listUl, provinces)
  } catch (e) {
    window.alert(e.message)
  }
}
