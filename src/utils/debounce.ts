const debounce = (fn: Function, ms = 300) => {
  let timeoutId: number
  return function () {
    window.clearTimeout(timeoutId)
    // eslint-disable-next-line prefer-rest-params
    const args = arguments
    // eslint-disable-next-line prefer-spread
    timeoutId = window.setTimeout(() => fn.apply(null, args), ms)
  }
}

export { debounce }
