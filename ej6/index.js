import { createNewFruit } from './createNewFruit.js'
import { getAllFruits } from './getAllFruits.js'
import { printFruitsTable } from './printFruitsTable.js'

window.addEventListener('DOMContentLoaded', main)

async function main () {
  /** @type {HTMLFormElement} */
  const formForm = document.getElementById('form')
  const formFields = {
    description: document.getElementById('description'),
    price: document.getElementById('price')
  }
  formForm.addEventListener('submit', handleSubmit)

  try {
    const fruits = await getAllFruits()
    printFruitsTable(fruits)
  } catch (e) {
    window.alert(e.message)
  }

  /**
   * @param {SubmitEvent} e
   */
  async function handleSubmit (e) {
    e.preventDefault()

    const description = formFields.description.value
    const price = formFields.price.value

    try {
      await createNewFruit(description, price)

      const fruits = await getAllFruits()

      formForm.reset()
      printFruitsTable(fruits)
    } catch (e) {
      window.alert(e.message)
    }
  }
}
