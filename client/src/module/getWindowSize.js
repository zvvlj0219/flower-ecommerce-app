import { useEffect, useState } from 'react'

export const getWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        })
      }

      window.addEventListener('resize', handleResize)

      handleResize()

      return () => window.removeEventListener('resize', handleResize)
    }
    return false
  }, [])

  return windowSize
}
