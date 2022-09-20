import React from 'react'
import { throttle } from '~/utils/throttle'
import { debounce } from '~/utils/debounce'

export function useScrollY(
  mode: 'throttle' | 'debounce' = 'throttle',
  ms = 100,
  passive = true
) {
  const [scrollY, setScrollY] = React.useState<number>(0)

  React.useEffect(() => {
    const cb = () => setScrollY(window.scrollY)
    const handleScroll = mode === 'throttle' ? throttle(cb, ms) : debounce(cb, ms)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [mode, ms, passive])

  return scrollY
}
