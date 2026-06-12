import { useEffect } from 'react'

/**
 * Attach IntersectionObserver to all .reveal elements —
 * adds the .in class when they scroll into view.
 */
export default function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window) || !els.length) {
      els.forEach((e) => e.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('in')
            io.unobserve(en.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    els.forEach((e) => io.observe(e))
    return () => io.disconnect()
  }, [])
}
