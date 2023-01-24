import { getUserById } from "./getUserById.js"
window.addEventListener('DOMContentLoaded', main)

function main () {
  const formForm = document.getElementById('form')
  /** @type {HTMLInputElement} */
  const userIdInput = document.getElementById('user-id')
  const userInfoPre = document.getElementById('user-info')

  formForm.addEventListener('submit', handleSubmit)

  /**
   * @param {SubmitEvent} e 
   */
  async function handleSubmit (e) {
    e.preventDefault()

    const userId = userIdInput.value

    try {
      const data = await getUserById(userId)
      userInfoPre.innerHTML = JSON.stringify(data, null, '&#9;')
    } catch (e) {
      userInfoPre.textContent = e.message
    }
  }
}
