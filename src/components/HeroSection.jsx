import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

function HeroSection({ backgroundType = 'image', backgroundSrc }) {
  const headingRef = useRef(null)
  const buttonRef = useRef(null)
  const mediaRef = useRef(null)

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } })
    timeline.fromTo(headingRef.current, { y: 36, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
    timeline.fromTo(buttonRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.5')

    const zoomAnimation = gsap.to(mediaRef.current, { scale: 1.06, duration: 12, ease: 'none', repeat: -1, yoyo: true })

    return () => {
      timeline.kill()
      zoomAnimation.kill()
    }
  }, [])

  return (
    <section className="relative isolate overflow-hidden">
      <div ref={mediaRef} className="absolute inset-0 -z-20 origin-center">
        {backgroundType === 'video' ? (
          <video autoPlay muted loop playsInline preload="metadata" className="h-full w-full object-cover" src={backgroundSrc} />
        ) : (
          <img
            src={backgroundSrc}
            alt="Students in school campus"
            loading="eager"
            fetchPriority="high"
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/90 via-primary/65 to-slate-900/50" />
      <div className="mx-auto flex min-h-[75vh] max-w-7xl items-center px-4 py-20 lg:px-8">
        <div className="max-w-3xl text-white">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-accent">Future-focused learning</p>
          <h1 ref={headingRef} className="mt-4 font-heading text-4xl font-extrabold leading-tight md:text-6xl">
            Education That Builds Character, Curiosity, and Confidence.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-blue-50 md:text-lg">
            Blue Ridge Academy blends academic rigor with personal growth in a secure, inspiring, and innovation-driven campus.
          </p>
          <div ref={buttonRef} className="mt-8 flex flex-wrap gap-4">
            <Link to="/admissions" className="btn-interactive rounded-full bg-accent px-6 py-3 text-sm font-bold text-slate-900 shadow-soft hover:brightness-95">
              Admission Open
            </Link>
            <Link to="/contact" className="btn-interactive rounded-full border border-white/60 px-6 py-3 text-sm font-bold text-white hover:bg-white/10">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
