import { useEffect } from 'react'
import Alpine from 'alpinejs'

export function useAlpine() {
  useEffect(() => {
    Alpine.start()
  }, [])
}
