import { Popover } from '@headlessui/react'
import { CalendarIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { usePopper } from 'react-popper'
import Calendar from './Calendar/Calendar'

interface Props {
  onInitialValue: () => string
  onDateChange: (date: string) => void
}

export default function CalendarButtonPopover({ onDateChange, onInitialValue }: Props) {
  const [referenceElement, setReferenceElement] = useState<HTMLButtonElement | null>(null)
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null)
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom-end'
  })

  return (
    <Popover>
      <Popover.Button
        ref={setReferenceElement}
        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer focus:outline-none"
      >
        <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </Popover.Button>

      <Popover.Panel
        ref={setPopperElement}
        style={styles.popper}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...attributes.popper}
        className="absolute z-10"
      >
        <Calendar
          onDateChange={onDateChange}
          onInitialValue={onInitialValue}
        />
      </Popover.Panel>
    </Popover>
  )
}
