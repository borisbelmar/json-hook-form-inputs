import clsx from 'clsx'
import { useController, useFormContext } from 'react-hook-form'
import Editor from 'react-simple-code-editor'
import type { FieldProps } from '@borisbelmar/json-hook-form'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import getLayoutProps from '@/utils/getLayoutProps'
import getErrorMessage from '@/utils/getErrorMessage'
import { darkThemeStyle } from './config/constants'
import HookFormInputLayout from '../HookFormInputLayout'

export default function HookFormEditor({
  field
}: FieldProps) {
  const { control, formState: { errors } } = useFormContext()
  const error = getErrorMessage(errors, field.name)

  const controller = useController({
    name: field.name,
    control
  })
  const { required, name, label, helpText, disabled } = getLayoutProps(field)

  const highlight = (content: string) => (
    <Highlight
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...defaultProps}
      theme={darkThemeStyle.codeTheme}
      code={content}
      language={field.editorLanguage as Language || 'json'}
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
    <HookFormInputLayout
      error={error}
      name={name}
      required={required}
      label={label}
      helpText={helpText}
      disabled={disabled === true}
      helpTextTop
    >
      <div className={clsx(
        'appearance-none block w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm',
        'focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500',
        'border-gray-300 placeholder-gray-400 dark:border-gray-700 dark:placeholder-gray-500',
        field.disabled && 'opacity-50 cursor-not-allowed'
      )}>
        <Editor
          value={controller.field.value || ''}
          onValueChange={controller.field.onChange}
          highlight={highlight}
          padding={10}
          style={darkThemeStyle.root}
          disabled={field.disabled === true}
        />
      </div>
    </HookFormInputLayout>
  )
}
