import { useCallback, useRef, useState } from 'react'
import md5 from 'md5'
import isArrayEmpty from '@/utils/isArrayEmpty'
import { useController } from 'react-hook-form'
import type { Control } from 'react-hook-form'
import type { FileDescriptor } from '../HookFormFileDrop'

interface Props {
  multiple?: boolean
  maxSize?: number
  control: Control
  name: string
}

const formatBytes = (bytes: number, decimals = 2) => {
  if (bytes === 0) return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return `${parseFloat((bytes / k ** i).toFixed(dm))}${sizes[i]}`
}

const getFileDescriptor = (file: File): FileDescriptor => {
  const { name, size, type } = file
  const formatedSize = formatBytes(size)
  return {
    id: md5(name + size + type),
    name,
    size,
    type,
    file,
    formatedSize
  }
}

export default function useFileDrop({ multiple, maxSize, control, name }: Props) {
  const { field } = useController({
    name,
    control
  })
  const checksumsRef = useRef<Set<string>>(new Set())
  const [isDraggingOver, setIsDraggingOver] = useState(false)
  const draggingOverTimeoutRef = useRef<number>()

  const handleFilesSet = useCallback((files: FileList | null) => {
    if (!files) return
    const descriptors = Array.from(files).map(getFileDescriptor)
    const filtered = descriptors.filter(desc => (
      !checksumsRef.current.has(desc.id)
      && (maxSize && desc.size <= maxSize)
    ))
    if (isArrayEmpty(filtered)) return
    if (!multiple) {
      const file = filtered[0]
      field.onChange([file])
    } else {
      field.onChange([...(field.value || []), ...filtered])
    }
  }, [multiple, maxSize, field])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFilesSet(e.target?.files)
  }

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const { files } = e.dataTransfer
    handleFilesSet(files)
  }

  const handleFileDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    clearTimeout(draggingOverTimeoutRef.current)
    setIsDraggingOver(true)
    draggingOverTimeoutRef.current = setTimeout(() => {
      setIsDraggingOver(false)
    }, 1000)
  }

  const handleFileRemove = (file: FileDescriptor) => {
    checksumsRef.current.delete(file.id)
    field.onChange((field.value || []).filter((f: FileDescriptor) => f.id !== file.id))
  }

  return {
    selectedFiles: field.value || [],
    isDraggingOver,
    handleFileChange,
    handleFileDrop,
    handleFileDragOver,
    handleFileRemove
  }
}
