import { removeChildren } from '../utils/removeChildren.js'

export function updateProvincesList (element, provincesList) {
  removeChildren(element)
  const fragment = document.createDocumentFragment()

  for (const province of provincesList) {
    const li = document.createElement('li')
    const ul = document.createElement('ul')

    for (const property in province) {
      const innerLi = document.createElement('li')

      if (property === 'centroide') {
        innerLi.textContent = `${property}: lat: ${province[property].lat}, lon: ${province[property].lon} `
      } else {
        innerLi.textContent = `${property}: ${province[property]}`
      }

      ul.appendChild(innerLi)
    }

    li.appendChild(ul)
    fragment.appendChild(li)
  }

  element.appendChild(fragment)
}
