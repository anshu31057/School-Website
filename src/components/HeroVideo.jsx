import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

function HeroVideo({ imageSrc, videoSrc, disableVideoOnMobile = true, onPrincipalMessageOpen }) {
  const headingRef = useRef(null)
  const actionsRef = useRef(null)
  const mediaRef = useRef(null)
  const imageLayerRef = useRef(null)
  const videoLayerRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [videoFailed, setVideoFailed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768)
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const canPlayVideo = useMemo(() => !(disableVideoOnMobile && isMobile) && !videoFailed, [disableVideoOnMobile, isMobile, videoFailed])

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } })
    timeline.fromTo(headingRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 })
    timeline.fromTo(actionsRef.current, { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.4')

    const bgZoom = gsap.to(mediaRef.current, { scale: 1.05, duration: 12, ease: 'none', repeat: -1, yoyo: true })

    return () => {
      timeline.kill()
      bgZoom.kill()
    }
  }, [isPlaying])

  useEffect(() => {
    if (!isPlaying || !canPlayVideo) return

    gsap.to(imageLayerRef.current, { opacity: 0, duration: 0.6, ease: 'power2.out' })
    gsap.to(videoLayerRef.current, { opacity: 1, duration: 0.7, ease: 'power2.out' })
  }, [isPlaying, canPlayVideo])

  function handlePlay() {
    if (!canPlayVideo) return
    setIsPlaying(true)
  }

  return (
    <section className="relative isolate overflow-hidden">
      <div ref={mediaRef} className="absolute inset-0 -z-20 origin-center">
        <img
          ref={imageLayerRef}
          src={imageSrc}
          alt="Students on school campus"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />

        {isPlaying && canPlayVideo ? (
          <video
            ref={videoLayerRef}
            className="absolute inset-0 h-full w-full object-cover opacity-0"
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onError={() => {
              setVideoFailed(true)
              setIsPlaying(false)
            }}
            poster={imageSrc}
          />
        ) : null}
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/90 via-primary/65 to-slate-900/55" />

      <div className="mx-auto flex min-h-[76vh] max-w-7xl items-center px-4 py-20 lg:px-8">
        <div className="max-w-3xl text-white">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-accent">Future-focused learning</p>
          <h1 ref={headingRef} className="mt-4 font-heading text-4xl font-extrabold leading-tight md:text-6xl">
            Education That Builds Character, Curiosity, and Confidence.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-blue-50 md:text-lg">
            Blue Ridge Academy blends academic rigor with personal growth in a secure, inspiring, and innovation-driven campus.
          </p>

          <div ref={actionsRef} className="mt-8 flex flex-wrap gap-4">
            <Link to="/admissions" className="btn-interactive rounded-full bg-accent px-6 py-3 text-sm font-bold text-slate-900 shadow-soft hover:brightness-95">
              Admission Open
            </Link>
            <Link to="/contact" className="btn-interactive rounded-full border border-white/60 px-6 py-3 text-sm font-bold text-white hover:bg-white/10">
              Contact Us
            </Link>
            <button
              type="button"
              onClick={onPrincipalMessageOpen}
              className="btn-interactive rounded-full border border-white/60 px-6 py-3 text-sm font-bold text-white hover:bg-white/10"
            >
              Message from Principal
            </button>
          </div>

          {disableVideoOnMobile && isMobile ? (
            <p className="mt-4 text-xs text-blue-100">Video preview is optimized for tablet/desktop. Mobile users see the high-quality campus image.</p>
          ) : null}
        </div>
      </div>

      {!isPlaying && canPlayVideo ? (
        <button
          type="button"
          onClick={handlePlay}
          aria-label="Play campus hero video"
          className="group absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-white/20" aria-hidden="true" />
          <span className="relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-primary shadow-soft transition group-hover:scale-105">
            ▶
          </span>
        </button>
      ) : null}
    </section>
  )
}

export default HeroVideo
