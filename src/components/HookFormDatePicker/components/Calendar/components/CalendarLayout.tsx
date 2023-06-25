interface Props {
  children: React.ReactNode
}

export default function CalendarLayout({ children }: Props) {
  return (
    <div className="mt-2 w-72 p-2 border border-gray-100 dark:border-gray-800 rounded-md bg-white dark:bg-gray-900">
      {children}
    </div>
  )
}
