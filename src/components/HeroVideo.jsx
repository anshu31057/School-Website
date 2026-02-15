import HeroSection from './HeroSection'

// Legacy compatibility wrapper retained for imports; video logic removed.
function HeroVideo(props) {
  return <HeroSection {...props} />
}

export default HeroVideo
