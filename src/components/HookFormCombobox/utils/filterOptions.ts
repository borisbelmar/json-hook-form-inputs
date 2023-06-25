import type { Option } from '@borisbelmar/json-hook-form'

export default function filterOptions(options: Option[], inputValue: string) {
  return options.filter(i => i.label.toLowerCase().includes(inputValue.toLowerCase()))
}
