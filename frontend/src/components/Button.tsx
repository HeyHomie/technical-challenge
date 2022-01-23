import clsx from 'clsx'

interface Props {
  id?: string
  children: React.ReactNode
  className?: string
  type?: 'primary' | 'outline' | 'green'
  onClick?: () => void
  onBlur?: () => void
  noBorderLeft?: boolean
  noBorderRight?: boolean
  disabled?: boolean
}

export function Button({
  id,
  children,
  className,
  type,
  noBorderLeft,
  noBorderRight,
  onClick,
  onBlur,
  disabled
}: Props) {
  const buttonClassNames =
    'w-full relative text-sm py-[5px] px-[16px] text-center font-medium whitespace-nowrap cursor-pointer align-middle select-none rounded-md border transition-all disabled:bg-[#f6f8fa] disabled:cursor-default disabled:border-[#1b1f2426]'

  if (type === 'green') {
    return (
      <button
        id={id}
        disabled={disabled}
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

  if (type === 'outline') {
    return (
      <button
        id={id}
        disabled={disabled}
        onClick={onClick}
        onBlur={onBlur}
        className={clsx(
          className,
          noBorderLeft && 'rounded-l-none',
          noBorderRight && 'rounded-r-none',
          'disabled:bg-[#f6f8fa] disabled:text-[#0969da80] select-none disabled:cursor-default disabled:border-[#1b1f2426] bg-[#f6f8fa] hover:bg-[#0969da] active:bg-[#0965ce] border-[#1b1f2426] hover:border-[#cdd9e51a] text-[#0969da] hover:text-[#ffffff] active:text-[#ffffff] dark:disabled:bg-[#22272e] dark:disabled:text-[#539bf580] dark:disabled:border-[#cdd9e51a] dark:bg-[#373e47] dark:border-[#cdd9e51a] dark:text-[#539bf5] dark:hover:bg-[#444c56] dark:hover:border-[#cdd9e51a] dark:hover:text-[#539bf5] dark:active:bg-[#0965ce] dark:active:text-white',
          buttonClassNames
        )}>
        {children}
      </button>
    )
  }

  return (
    <button
      id={id}
      disabled={disabled}
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
