import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Layout() {
  const contentRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })

    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.55, ease: 'power2.out' })
    }, contentRef)

    return () => ctx.revert()
  }, [pathname])

  return (
    <div className="min-h-screen bg-background text-bodyText">
      <Navbar />
      <main ref={contentRef} className="min-h-[60vh]" key={pathname}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
