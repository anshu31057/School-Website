import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="mt-16 bg-primary text-slate-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3 lg:px-8">
        <div>
          <h3 className="font-heading text-lg font-bold">Blue Ridge Academy</h3>
          <p className="mt-3 text-sm text-slate-200">
            Empowering young minds through modern education, character development, and future-ready learning.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-base font-semibold">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-200">
            <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
            <li><Link to="/academics" className="hover:text-accent">Academics</Link></li>
            <li><Link to="/admissions" className="hover:text-accent">Admissions</Link></li>
            <li><Link to="/notices" className="hover:text-accent">Notices</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-base font-semibold">Contact</h4>
          <div className="mt-3 space-y-2 text-sm text-slate-200">
            <p>+1 (555) 123-4567</p>
            <p>88 Maple Avenue, Riverside City</p>
            <p>Mon–Sat: 8:00 AM – 4:00 PM</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 px-4 py-4 text-center text-xs text-slate-300">
        © {new Date().getFullYear()} Blue Ridge Academy. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
