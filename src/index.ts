import { memo } from 'react'
import HookFormInput from './components/HookFormInput'
import HookFormTextArea from './components/HookFormTextArea'
import HookFormSelect from './components/HookFormSelect/HookFormSelect'
import HookFormToggle from './components/HookFormToggle'
import HookFormCheckbox from './components/HookFormCheckbox/HookFormCheckbox'
import HookFormRadio from './components/HookFormRadio/HookFormRadio'
import HookFormFileDrop from './components/HookFormFileDrop/HookFormFileDrop'
import HookFormEditor from './components/HookFormEditor/HookFormEditor'
import HookFormDatePicker from './components/HookFormDatePicker/HookFormDatePicker'
import HookFormCombobox from './components/HookFormCombobox/HookFormCombobox'

const DEFAULT_FIELDS = {
  text: memo(HookFormInput),
  textarea: memo(HookFormTextArea),
  select: memo(HookFormSelect),
  toggle: memo(HookFormToggle),
  checkbox: memo(HookFormCheckbox),
  radio: memo(HookFormRadio),
  file: memo(HookFormFileDrop),
  editor: memo(HookFormEditor),
  date: memo(HookFormDatePicker),
  combobox: memo(HookFormCombobox)
}

export default DEFAULT_FIELDS
