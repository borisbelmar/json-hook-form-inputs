import Editor from 'react-simple-code-editor'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import { darkThemeStyle } from '../config/constants'

interface Props {
  value: string
  onChange: (value: string) => void
  language: Language
  isDarkMode: boolean
}

export default function CodeEditor({
  value,
  onChange,
  language
}: Props) {
  const highlight = (content: string) => (
    <Highlight
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...defaultProps}
      theme={darkThemeStyle.codeTheme}
      code={content}
      language={language}
    >
      {({ tokens, getLineProps, getTokenProps }) => (
        <>
          {tokens.map((line, i) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                // eslint-disable-next-line react/jsx-props-no-spreading
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </>
      )}
    </Highlight>
  )

  return (
    <Editor
      value={value}
      onValueChange={onChange}
      highlight={highlight}
      padding={10}
      tabSize={2}
      style={darkThemeStyle.root}
    />
  )
}
