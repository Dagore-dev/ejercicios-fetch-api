import { removeChildren } from '../utils/removeChildren.js'

export function updatePeopleList (element, peopleList) {
  removeChildren(element)
  const fragment = document.createDocumentFragment()

  for (const person of peopleList) {
    const li = document.createElement('li')
    const ul = document.createElement('ul')

    for (const property in person) {
      const innerLi = document.createElement('li')
      innerLi.textContent = `${property}: ${person[property]}`

      ul.appendChild(innerLi)
    }

    li.appendChild(ul)
    fragment.appendChild(li)
  }

  element.appendChild(fragment)
}
