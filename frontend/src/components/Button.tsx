import clsx from 'clsx'

interface Props {
  children: React.ReactNode
  className?: string
  type?: 'primary' | 'green'
  onClick?: () => void
  onBlur?: () => void
  noBorderLeft?: boolean
  noBorderRight?: boolean
}

export function Button({
  children,
  className,
  type,
  noBorderLeft,
  noBorderRight,
  onClick,
  onBlur
}: Props) {
  const buttonClassNames =
    'w-full relative text-sm py-[5px] px-[16px] text-center font-medium whitespace-nowrap cursor-pointer align-middle select-none rounded-md border'

  if (type === 'green') {
    return (
      <button
        onClick={onClick}
        onBlur={onBlur}
        className={clsx(
          className,
          noBorderLeft && 'rounded-l-none',
          noBorderRight && 'rounded-r-none',
          'bg-[#2da44e] hover:bg-[#46954a] active:bg-[#347d39] border-[#cdd9e51a] hover:border-[#cdd9e51a] text-white',
          buttonClassNames
        )}>
        {children}
      </button>
    )
  }

  return (
    <button
      onClick={onClick}
      onBlur={onBlur}
      className={clsx(
        className,
        noBorderLeft && 'rounded-l-none',
        noBorderRight && 'rounded-r-none',
        'border-[#1b1f2426] hover:border-[#1b1f2426] dark:border-[#cdd9e51a] dark:hover:border-[#768390] text-[#24292f] dark:text-[#adbac7] bg-[#f6f8fa] hover:bg-[#f3f4f6] active:bg-[#ebecf0] dark:bg-[#373e47] dark:hover:bg-[#444c56] dark:active:bg-[#3d444d]',
        buttonClassNames
      )}>
      {children}
    </button>
  )
}
