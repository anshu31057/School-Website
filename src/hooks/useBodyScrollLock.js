import { useEffect } from 'react'

let lockCount = 0

function useBodyScrollLock(locked) {
  useEffect(() => {
    if (!locked) return undefined

    lockCount += 1
    document.body.style.overflow = 'hidden'

    return () => {
      lockCount = Math.max(0, lockCount - 1)

      if (lockCount === 0) {
        document.body.style.overflow = 'auto'
      }
    }
  }, [locked])
}

export default useBodyScrollLock
