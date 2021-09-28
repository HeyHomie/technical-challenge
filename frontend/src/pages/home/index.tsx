import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC<IPage> = (props) => {
  return (
    <>
      <h1>Home</h1>
      <Link to="/MarioDena">Go To Repos</Link>
    </>
  )
}

export default Home
