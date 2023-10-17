/**
 * @param {{milliseconds:number}} payload
 */
export function delay({ milliseconds }) {
  return new Promise(function (resolve) {
    setTimeout(resolve, milliseconds)
  })
}
