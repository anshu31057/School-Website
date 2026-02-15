import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function PrincipalModal({ open, onClose }) {
  const overlayRef = useRef(null)
  const cardRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } })
    timeline.fromTo(overlayRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.25 })
    timeline.fromTo(cardRef.current, { y: 24, scale: 0.95, autoAlpha: 0 }, { y: 0, scale: 1, autoAlpha: 1, duration: 0.35 }, '-=0.08')

    return () => timeline.kill()
  }, [open])

  useEffect(() => {
    if (!open) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label="Message from Principal"
      className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/55 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        ref={cardRef}
        className="w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-soft"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="grid max-h-[85vh] overflow-y-auto md:grid-cols-[1fr_1.2fr]">
          <img
            src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=70"
            alt="Dr. Eleanor Matthews, Principal"
            loading="lazy"
            className="h-72 w-full object-cover md:h-full"
          />
          <div className="p-6 md:p-8">
            <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-secondary">Message from Principal</p>
            <h3 className="mt-3 font-heading text-2xl font-extrabold text-primary">Dr. Eleanor Matthews</h3>
            <p className="text-sm font-medium text-slate-600">Principal, Blue Ridge Academy</p>
            <p className="mt-5 text-sm leading-relaxed text-slate-700">
              At Blue Ridge Academy, every learner is seen, challenged, and supported. We foster disciplined scholarship, curiosity-driven inquiry,
              and compassionate leadership so our students grow into confident global citizens. Our mission is to shape not only academic outcomes,
              but character and purpose for life.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="btn-interactive mt-6 w-full rounded-full bg-primary px-5 py-3 text-sm font-bold text-white hover:bg-secondary sm:w-auto"
            >
              Close Message
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrincipalModal
