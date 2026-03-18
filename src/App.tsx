import Header from './components/Header'
import Hero from './components/Hero'
import PainPoints from './components/PainPoints'
import Solution from './components/Solution'
import Simulator from './components/Simulator'
import LineCta from './components/LineCta'
import Strengths from './components/Strengths'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import FloatingLineButton from './components/FloatingLineButton'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Solution />
        <Simulator />
        <LineCta />
        <Strengths />
        <Testimonials />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
      <FloatingLineButton />
    </div>
  )
}

export default App
