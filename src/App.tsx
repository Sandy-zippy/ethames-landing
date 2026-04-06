import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import IndustryEdge from './components/IndustryEdge'
import Programs from './components/Programs'
import Campus from './components/Campus'
import Recognition from './components/Recognition'
import CTA from './components/CTA'
import Footer from './components/Footer'

function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  )
}
