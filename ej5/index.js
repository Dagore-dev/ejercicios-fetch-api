import { removeChildren } from '../utils/removeChildren.js'
import { getRandomUser } from './getRandomUser.js'

window.addEventListener('DOMContentLoaded', main)

async function main () {
  const root = document.getElementById('root')

  try {
    removeChildren(root)

    const [ data ] = await getRandomUser()
    const firstName = data.name.first
    const lastName = data.name.last
    const picture = data.picture.large

    root.textContent = `${firstName} ${lastName}`
    
    const div = document.createElement('div')
    const img = document.createElement('img')
    img.src = picture

    div.appendChild(img)
    root.appendChild(div)
  } catch (e) {
    root.textContent = e.message
  }
}
