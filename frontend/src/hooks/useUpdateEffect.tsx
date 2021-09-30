import { DependencyList, useEffect, useRef } from 'react'

export const useUpdateEffect = (
  callback: any,
  dependencies: DependencyList | undefined
) => {
  const firstRenderRef = useRef(true)

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false
      return
    }
    return callback()
  }, dependencies)
}
