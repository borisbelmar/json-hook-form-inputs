import { useFormContext } from 'react-hook-form'
import getErrorMessage from '@/utils/getErrorMessage'
import getLayoutProps from '@/utils/getLayoutProps'
import isArrayEmpty from '@/utils/isArrayEmpty'
import type { FieldProps } from '@borisbelmar/json-hook-form'
import HookFormInputLayout from '../HookFormInputLayout'
import DropZone from './components/DropZone'
import FileList from './components/FileList'
import useFileDrop from './hooks/useFileDrop'

export interface FileDescriptor {
  id: string
  file: File
  name: string
  size: number
  type: string
  formatedSize: string
}

export default function HookFormFileDrop({
  field
}: FieldProps) {
  const { control, formState: { errors } } = useFormContext()
  const error = getErrorMessage(errors, field.name)

  const { label, name, helpText, required } = getLayoutProps(field)
  const { multiple, accept, maxSize } = field.fileOptions || {}

  const {
    selectedFiles,
    isDraggingOver,
    handleFileChange,
    handleFileDragOver,
    handleFileDrop,
    handleFileRemove
  } = useFileDrop({ multiple, maxSize, control, name })

  return (
    <HookFormInputLayout
      name={name}
      label={label}
      error={error}
      helpText={helpText}
      required={required}
      disabled={field.disabled === true}
      helpTextTop
    >
      <div
        onChange={handleFileChange}
        onDrop={handleFileDrop}
        onDragOver={handleFileDragOver}
      >
        {!isArrayEmpty(selectedFiles) && (
          <FileList
            files={selectedFiles}
            onFileRemove={handleFileRemove}
          />
        )}
        <DropZone
          isDraggingOver={isDraggingOver}
          multiple={multiple}
          label={field.fileOptions?.uploadLabel}
          helpText={field.fileOptions?.uploadHelpText}
          accept={accept}
          hideIcon={!isArrayEmpty(selectedFiles)}
        />
      </div>
    </HookFormInputLayout>
  )
}
