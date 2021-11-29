import { FC } from 'react'

type ButtonProps = {
  className?: string
}

const Button: FC<ButtonProps> = ({ children, className }) => {
  return (
    <button
      className={`w-full rounded-md bg-primary border-box px-4 py-1 dark:bg-[#21262d] border border-secondary dark:border-transparent dark:hover:border-white dark:hover:bg-[#30363d] ${className}`}>
      {children}
    </button>
  )
}

export default Button
