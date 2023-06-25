import type { FileDescriptor } from '../HookFormFileDrop'

interface Props {
  file: FileDescriptor
  onFileRemove: (file: FileDescriptor) => void
}

export default function FileItem({ file, onFileRemove }: Props) {
  const handleItemClick = () => {
    onFileRemove(file)
  }

  return (
    <li className="py-2 px-4">
      <h3>{file.name}</h3>
      <p className="opacity-75 text-sm">{file.formatedSize}</p>
      <button
        type="button"
        className="text-primary-500 text-sm"
        onClick={handleItemClick}
      >
        Remove
      </button>
    </li>
  )
}
