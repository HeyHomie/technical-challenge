interface Props {
  children: React.ReactNode
}
export function Container({ children }: Props) {
  return <div className="w-[1280px] m-auto px-[32px]">{children}</div>
}
