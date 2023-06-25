import type { Field, ValidationValue } from '@borisbelmar/json-hook-form'

export default function getLayoutProps(
  field: Field
) {
  const { name, label, helpText, validations, disabled } = field

  return {
    label,
    name: name as string,
    helpText,
    disabled,
    required: (validations?.required as ValidationValue<boolean>)?.value
      ?? validations?.required as boolean
  }
}
