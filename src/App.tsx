import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogoMarquee from './components/LogoMarquee'
import Stats from './components/Stats'
import IndustryEdge from './components/IndustryEdge'
import Programs from './components/Programs'
import Campus from './components/Campus'
import Recognition from './components/Recognition'
import CTA from './components/CTA'
import Footer from './components/Footer'
import ThankYou from './components/ThankYou'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'

function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoMarquee />
      <Stats />
      <IndustryEdge />
      <Programs />
      <Campus />
      <Recognition />
      <CTA />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </HashRouter>
  )
}
