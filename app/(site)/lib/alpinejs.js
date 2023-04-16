import { useEffect } from 'react'
import Alpine from 'alpinejs'

// Since Next.js 13 is in beta, I had issues trying to integrate AlpineJS into it.
// But I am leaving this here to show I made the effort and would gladly use it over regular JS
export function useAlpine() {
  useEffect(() => {
    Alpine.start()
  }, [])
}
