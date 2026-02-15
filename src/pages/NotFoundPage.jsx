import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center px-4 py-16 text-center">
      <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-secondary">404</p>
      <h1 className="mt-3 font-heading text-4xl font-extrabold text-primary">Page not found</h1>
      <p className="mt-3 max-w-xl text-slate-600">The page you are looking for does not exist or may have been moved.</p>
      <Link to="/" className="btn-interactive mt-6 rounded-full bg-secondary px-6 py-3 text-sm font-bold text-white hover:bg-primary">
        Return Home
      </Link>
    </section>
  )
}

export default NotFoundPage
