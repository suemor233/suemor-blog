import { useTheme } from 'next-themes'

export function useColorMode() {
  const { resolvedTheme, setTheme } = useTheme()

  const isDark = resolvedTheme === 'dark'

  const toggleColorMode = () => setTheme(isDark ? 'light' : 'dark')

  return { isDark, toggleColorMode }
}
