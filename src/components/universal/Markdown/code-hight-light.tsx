import type { FC, PropsWithChildren } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
  oneDark,
  oneLight,
} from 'react-syntax-highlighter/dist/cjs/styles/prism'

import { useColorMode } from '~/hooks/use-color-mode'

interface IProps extends PropsWithChildren {
  match: RegExpExecArray
  props: any
}

const CodehightLight: FC<IProps> = ({ match, children, props }) => {
  const { isDark } = useColorMode()
  return (
    <div className="opacity-90">
      <SyntaxHighlighter
        style={isDark ? oneDark : oneLight}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodehightLight
