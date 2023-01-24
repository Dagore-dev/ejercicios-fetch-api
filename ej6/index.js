import { getAllFruits } from "./getAllFruits.js"
import { printFruitsTable } from "./printFruitsTable.js"

window.addEventListener('DOMContentLoaded', main)

async function main () {
  const fruits = await getAllFruits()
  printFruitsTable(fruits)
}
