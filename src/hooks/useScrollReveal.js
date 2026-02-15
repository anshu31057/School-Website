import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function useScrollReveal({ selector = '[data-reveal]', y = 28, duration = 0.8, delay = 0, stagger = 0, start = 'top 84%' } = {}) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return undefined

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray(selector)
      if (!targets.length) return

      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start,
            once: true,
          },
        },
      )
    }, containerRef)

    return () => ctx.revert()
  }, [selector, y, duration, delay, stagger, start])

  return containerRef
}

export default useScrollReveal
