import { removeChildren } from "../utils/removeChildren.js"

/**
 * @param {object[]} fruits 
 */
export function printFruitsTable (fruits) {
  const table = document.getElementById('table')
  removeChildren(table)

  const fragment = document.createDocumentFragment()

  const tr = document.createElement('tr')
  
  const codeTh = document.createElement('th')
  codeTh.textContent = 'Código'
  tr.appendChild(codeTh)
  
  const descriptionTh = document.createElement('th')
  descriptionTh.textContent = 'Descripción'
  tr.appendChild(descriptionTh)
  
  const priceTh = document.createElement('th')
  priceTh.textContent = 'Precio'
  tr.appendChild(priceTh)


  fragment.appendChild(tr)

  for (const fruit of fruits) {
    const tr = document.createElement('tr')
    
    const codeTd = document.createElement('td')
    codeTd.textContent = fruit.code
    tr.appendChild(codeTd)
    
    const descriptionTd = document.createElement('td')
    descriptionTd.textContent = fruit.description
    tr.appendChild(descriptionTd)

    const priceTd = document.createElement('td')
    priceTd.textContent = fruit.price
    tr.appendChild(priceTd)

    fragment.appendChild(tr)
  }

  table.appendChild(fragment)
}
