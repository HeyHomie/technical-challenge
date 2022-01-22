import { Container } from '..'

export function Nav() {
  return (
    <nav className="h-[55px] sticky bg-[#22272e] border-b border-[#373e47] mt-4">
      <Container>
        <div className="grid grid-cols-4">
          <div></div>
          <div className="col-span-3">Items</div>
        </div>
      </Container>
    </nav>
  )
}
