import type { Option } from '@borisbelmar/json-hook-form'

export function getOptionByValue(options: Option[], value: string) {
  return options.find(i => i.value === value)
}

export function getOptionByLabel(options: Option[], label: string) {
  return options.find(i => i.label === label)
}
