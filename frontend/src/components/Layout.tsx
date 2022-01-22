interface Props {
  children: React.ReactNode
}

export function Layout({ children }: Props) {
  return (
    <div className="bg-white dark:bg-github-dark-bg text-sm dark:text-github-dark-text">
      <div className="bg-github-header dark:bg-github-dark-header h-[62px]"></div>
      {children}
    </div>
  )
}
