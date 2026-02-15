import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import useBodyScrollLock from '../../hooks/useBodyScrollLock'

function Modal({ open, onClose, title, children, contentClassName = 'max-w-3xl' }) {
  const overlayRef = useRef(null)
  const cardRef = useRef(null)
  const closeRef = useRef(null)

  useBodyScrollLock(open)

  useEffect(() => {
    if (!open) return undefined

    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } })
    timeline.fromTo(overlayRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.24 })
    timeline.fromTo(cardRef.current, { y: 18, scale: 0.96, autoAlpha: 0 }, { y: 0, scale: 1, autoAlpha: 1, duration: 0.3 }, '-=0.08')

    return () => timeline.kill()
  }, [open])

  useEffect(() => {
    if (!open) return undefined
    closeRef.current?.focus()

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
      aria-labelledby="modal-title"
      className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/60 p-3 sm:p-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        ref={cardRef}
        className={`relative w-full ${contentClassName} max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-soft`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-3 top-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary shadow-md transition hover:scale-105 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
        >
          ✕
        </button>
        <h2 id="modal-title" className="sr-only">{title}</h2>
        {children}
      </div>
    </div>
  )
}

export default Modal
