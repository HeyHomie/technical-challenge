import { useState, useEffect } from 'react'
const API = 'https://api.github.com/'

export const useGetData = (query: string) => {
  const [data, setData] = useState({})
  useEffect(() => {
    fetch(API + query)
      .then((response) => response.json())
      .then((data) => setData(data.data))
  }, [])
  return data
}
