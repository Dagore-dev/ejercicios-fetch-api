import { getPeople } from './getPeople.js'
import { updatePeopleList } from './updatePeopleList.js'

window.addEventListener('DOMContentLoaded', main)

async function main () {
  const listUl = document.getElementById('people-list')

  try {
    const people = await getPeople()
    updatePeopleList(listUl, people)
  } catch (e) {
    console.log(e)
  }
}
