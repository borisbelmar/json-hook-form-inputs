import clsx from 'clsx'

interface Props {
  name: string
  children: React.ReactNode
  label?: string
  required?: boolean
  disabled?: boolean
  helpText?: string
  error?: string
  helpTextTop?: boolean
}

function HelpTextAndError({
  error,
  helpText
}: Pick<Props, 'error' | 'helpText'>) {
  if (!error && !helpText) return null

  return (
    <small className={clsx('text-xs block', error ? 'text-red-500' : 'opacity-50')}>
      {error || helpText}
    </small>
  )
}

export default function HookFormInputLayout({
  error,
  children,
  label,
  required,
  helpText,
  name,
  helpTextTop,
  disabled
}: Props) {
  return (
    <div>
      {label && (
        <div className={clsx('mb-1', disabled && 'opacity-50')}>
          <label htmlFor={name} className="block font-medium">
            {label}
            {required && (
              <span className="text-primary-500">*</span>
            )}
          </label>
          {helpTextTop && (
            <HelpTextAndError
              error={error}
              helpText={helpText}
            />
          )}
        </div>
      )}
      {children}
      {!helpTextTop && (
        <div className="mt-0.5">
          <HelpTextAndError
            error={error}
            helpText={helpText}
          />
        </div>
      )}
    </div>
  )
}
