import { FC } from 'react'

export const Main: FC = ({ children }) => {
  return (
    <main>
      <div>tab navigation</div>
      <div>{children}</div>
      <div>dynamic content (children)</div>
    </main>
  )
}
