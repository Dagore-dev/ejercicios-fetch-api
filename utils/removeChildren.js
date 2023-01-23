/**
 * @param {HTMLElement} element
 */
export function removeChildren (element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }
}
