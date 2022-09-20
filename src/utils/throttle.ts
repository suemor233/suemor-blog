const throttle = (fn: Function, ms = 300) => {
  let inThrottle: boolean, lastFn: number, lastTime: number
  return function () {
    // eslint-disable-next-line prefer-rest-params
    const args = arguments
    if (!inThrottle) {
      // eslint-disable-next-line prefer-spread
      fn.apply(null, args)
      lastTime = Date.now()
      inThrottle = true
    } else {
      window.clearTimeout(lastFn)
      lastFn = window.setTimeout(() => {
        if (Date.now() - lastTime >= ms) {
          // eslint-disable-next-line prefer-spread
          fn.apply(null, args)
          lastTime = Date.now()
        }
      }, Math.max(ms - (Date.now() - lastTime), 0))
    }
  }
}

export { throttle }
