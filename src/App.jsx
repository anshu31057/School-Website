import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import AdmissionsPage from './pages/AdmissionsPage'
import NoticesPage from './pages/NoticesPage'
import ContactPage from './pages/ContactPage'
import GalleryPage from './pages/GalleryPage'
import NotFoundPage from './pages/NotFoundPage'
import AcademicsPage from './pages/AcademicsPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/academics" element={<AcademicsPage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/notices" element={<NoticesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
