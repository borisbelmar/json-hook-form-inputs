import type { FileDescriptor } from '../HookFormFileDrop'
import FileItem from './FileItem'

interface Props {
  files: FileDescriptor[]
  onFileRemove: (file: FileDescriptor) => void
}

export default function FileList({ files, onFileRemove }: Props) {
  return (
    <ul className="divide-y divide-gray-500 divide-opacity-50 rounded-md">
      {files.map(file => (
        <FileItem key={file.id} file={file} onFileRemove={onFileRemove} />
      ))}
    </ul>
  )
}
