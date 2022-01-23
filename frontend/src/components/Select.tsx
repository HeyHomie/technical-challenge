import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { Button } from '.'

type Option = {
  label: string
  value: string
}

interface Props {
  id?: string
  children: React.ReactNode
  className?: string
  options?: Option[]
  name: string
  defaultValue?: string
  onSelect?: (value: string) => void
}

export function Select({
  id,
  children,
  className,
  options = [],
  name,
  defaultValue,
  onSelect
}: Props) {
  const defaultOption =
    options.find((option) => option.value === defaultValue) || options[0]

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [activeOption, setActiveOption] = useState<Option>(defaultOption)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleSelect = () => setIsOpen(!isOpen)

  const onSelectFn = (option: Option) => {
    setActiveOption(option)
    setIsOpen(false)
    onSelect && onSelect(option.value)
  }

  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  })

  return (
    <div className={clsx(className, 'mr-1 relative')}>
      <Button id={id} onClick={toggleSelect}>
        {children}
        <span className='inline-block align-middle content-[""] border-4 border-b-0 border-r-transparent border-b-transparent border-l-transparent ml-2 opacity-80'></span>
      </Button>
      <div
        ref={menuRef}
        className={clsx(
          isOpen ? 'block' : 'hidden',
          'absolute right-0 left-auto top-auto bottom-auto z-30'
        )}>
        <div className="my-3 rounded-md w-[300px] bg-[#ffffff] dark:bg-[#2d333b] border-[#d0d7de] dark:border-[#545d68] border text-xs">
          <header className="p-[7px] pl-[16px] flex items-center justify-between border-b border-[#d8dee4] dark:border-[#373e47] font-semibold">
            Select {name}
            <span className="cursor-pointer" onClick={() => setIsOpen(false)}>
              <svg
                aria-label="Close menu"
                aria-hidden="false"
                role="img"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                className="icon fill-[#57606a] dark:fill-[#768390]">
                <path
                  fillRule="evenodd"
                  d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
              </svg>
            </span>
          </header>
          <div>
            {options.map((option) => {
              const isActive = activeOption?.value === option.value

              return (
                <div
                  key={option.value}
                  onClick={() => onSelectFn(option)}
                  className={clsx(
                    isActive && 'bg-[#eaeef280] dark:bg-[#636e7b1a]',
                    'text-xs color-[#24292f] dark:color-[#adbac7] px-4 py-[7px] w-full flex border-b last:border-0 border-[#d8dee4] dark:border-[#373e47] hover:bg-[#eaeef280] dark:hover:bg-[#636e7b1a] hover:cursor-pointer transition-all'
                  )}>
                  <svg
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    className={clsx(
                      !isActive && ' invisible',
                      'icon mr-2 transition-all dark:fill-[#adbac7]'
                    )}>
                    <path
                      fillRule="evenodd"
                      d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                  </svg>
                  {option.label}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
