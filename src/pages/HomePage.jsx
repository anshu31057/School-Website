import { useState } from 'react'
import HeroVideo from '../components/HeroVideo'
import TopInfoStrip from '../components/TopInfoStrip'
import AboutPreview from '../components/AboutPreview'
import HighlightsSection from '../components/HighlightsSection'
import NoticeTicker from '../components/NoticeTicker'
import GalleryPreview from '../components/GalleryPreview'
import AdmissionCTA from '../components/AdmissionCTA'
import PrincipalModal from '../components/modals/PrincipalModal'

function HomePage() {
  const [isPrincipalModalOpen, setIsPrincipalModalOpen] = useState(false)

  return (
    <>
      <HeroVideo
        // Replace with your own optimized hero image asset.
        backgroundImage="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1900&q=70"
        onPrincipalMessageOpen={() => setIsPrincipalModalOpen(true)}
      />
      <TopInfoStrip />
      <AboutPreview />
      <HighlightsSection />
      <NoticeTicker />
      <GalleryPreview />
      <AdmissionCTA />
      <PrincipalModal open={isPrincipalModalOpen} onClose={() => setIsPrincipalModalOpen(false)} />
    </>
  )
}

export default HomePage
